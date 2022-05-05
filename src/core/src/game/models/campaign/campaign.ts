import { d6 } from '../../core';
import { AvailableVictoryConditions } from '../../data/campaign.data';
import { Difficulty } from '../../enums';
import { CharacterGenerator } from '../../generators/character.generator';
import { EquipmentGenerator } from '../../generators/equipment.generator';
import { ShipGenerator } from '../../generators/ship.generator';
import { WeaponGenerator } from '../../generators/weapon.generator';
import { Ship } from '../ship';
import { VictoryCondition } from './victory-condition';

import {
  Crew,
  CrewResource
} from '../crew';

export class CampaignConfig {
  private readonly minCrew: number = 4;
  private readonly maxCrew: number = 6;

  private _name: string = '';
  private _crewSize: number = 6;
  private _useStars: boolean = true;
  private _useStory: boolean = true;
  private _difficulty: Difficulty = Difficulty.Normal;

  get name(): string { return this._name; }
  get crewSize(): number { return this._crewSize; }
  get useStars(): boolean { return this._useStars; }
  get useStory(): boolean { return this._useStory; }
  get difficulty(): Difficulty { return this._difficulty; }

  readonly crew: Crew = new Crew();
  readonly crewSizeOptions: number[] = [ 4, 5, 6 ]

  ship!: Ship;
  victory: VictoryCondition | null = null;

  victoryConditions = AvailableVictoryConditions(this.difficulty);

  constructor(name: string) {
    this.name = name;
  }

  private containsVictory = (victory: VictoryCondition) =>
    this.victoryConditions
        .map(v => v.value)
        .includes(victory);

  private updateVictory = (difficulty: Difficulty) => {
    this.victoryConditions = AvailableVictoryConditions(difficulty);

    if (this.victory && !this.containsVictory(this.victory))
      this.victory = null;
  }

  private initStoryPoints = (): number => {
    const roll = d6();

    switch (this.difficulty) {
      case Difficulty.Insanity:
        return 0;
      case Difficulty.Hardcore:
        return roll;
      default:
        return roll + 1;
    }
  }

  set name(value: string) { this._name = value; }

  set crewSize(value: number) {
    this._crewSize = value > this.maxCrew
      ? this.maxCrew
      : value < this.minCrew
        ? this.minCrew
        : value;

    if (this.crew.roster.length > 0)
      this.crew.clearRoster();

    this.crew.addCharacters(CharacterGenerator.GenerateRoster(value));
  }

  set useStars(value: boolean) {
    this._useStars = this.difficulty === Difficulty.Insanity
      ? false
      : value;
  }

  set useStory(value: boolean) {
    this._useStory = this.difficulty === Difficulty.Insanity
      ? false
      : value;
  }

  set difficulty(value: Difficulty) {
    this._difficulty = value;
    this.updateVictory(value);

    if (value === Difficulty.Insanity) {
      this.useStars = false;
      this.useStory = false;
    }
  }

  finalize = (): Campaign => {
    this.ship = ShipGenerator.Generate();

    const resources = new Array<CrewResource>();

    for (let character of this.crew.roster)
      resources.push(...CharacterGenerator.DevelopCharacter(character));

    const crewResources = resources.reduce((total, current) => {
      return {
        credits: (total.credits ?? 0) + (current.credits ?? 0),
        patrons: (total.patrons ?? 0) + (current.patrons ?? 0),
        rivals: (total.rivals ?? 0) + (current.rivals ?? 0),
        rumors: (total.rumors ?? 0) + (current.rumors ?? 0),
        storyPoints: this.difficulty === Difficulty.Insanity
          ? 0
          : (total.storyPoints ?? 0) + (current.storyPoints ?? 0)
      } as CrewResource
    })

    crewResources.storyPoints = (crewResources.storyPoints ?? 0) + this.initStoryPoints();

    return new Campaign(this, crewResources);
  }
}

export class Campaign {
  readonly id: Symbol;
  readonly crewSize: number;
  readonly useStars: boolean;
  readonly useStory: boolean;
  readonly difficulty: Difficulty;
  readonly crew: Crew;
  readonly ship: Ship;
  readonly victory: VictoryCondition | null;

  private _name: string;
  private _storyPoints: number = 0;

  credits: number;
  patrons: number;
  rivals: number;
  rumors: number;

  constructor(config: CampaignConfig, resources: CrewResource) {
    this.id = Symbol();
    this._name = config.name;
    this.crewSize = config.crewSize;
    this.useStory = config.useStory;
    this.useStars = config.useStars;
    this.difficulty = config.difficulty;
    this.crew = config.crew;
    this.ship = config.ship;
    this.victory = config.victory;

    this.credits = resources.credits ?? 0;
    this.patrons = resources.patrons ?? 0;
    this.rivals = resources.rivals ?? 0;
    this.rumors = resources.rumors ?? 0;
    this.storyPoints = resources.storyPoints ?? 0;
  }

  get name(): string { return this._name; }
  set name(value: string) { this._name = value; }

  get storyPoints(): number { return this._storyPoints; }
  set storyPoints(value: number) {
    this._storyPoints = this.difficulty === Difficulty.Insanity
      ? 0
      : value;
  }
}
