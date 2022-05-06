import { Campaign } from './campaign';
import { CampaignResource } from './campaign-resource';
import { Character } from '../character/character';
import { d6 } from '../../core';
import { Crew } from '../crew';
import { AvailableVictoryConditions } from '../../data/campaign.data';
import { Difficulty } from '../../enums';
import { CharacterGenerator } from '../../generators/character.generator';
import { EquipmentGenerator } from '../../generators/equipment.generator';
import { ShipGenerator } from '../../generators/ship.generator';
import { WeaponGenerator } from '../../generators/weapon.generator';
import { Ship } from '../ship';
import { VictoryCondition } from './victory-condition';

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
  readonly savvyUpgradeOptions: number[] = [ 0, 1, 2, 3 ];

  ship!: Ship;
  victory: VictoryCondition | null = null;
  leader: Character | null = null;
  savvyUpgrades: number = 3;

  victoryConditions = AvailableVictoryConditions(this.difficulty);

  constructor(name: string) {
    this.name = name;
    this.initRoster();
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

  private initRoster = () => {
    if (this.crew.roster.length > 0)
      this.crew.clearRoster();

    this.crew.addCharacters(CharacterGenerator.GenerateRoster(this.crewSize));
  }

  set name(value: string) { this._name = value; }

  set crewSize(value: number) {
    this._crewSize = value > this.maxCrew
      ? this.maxCrew
      : value < this.minCrew
        ? this.minCrew
        : value;

    this.initRoster();
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
    console.log('Finalizing campaign...');
    this.ship = ShipGenerator.Generate();
    console.log('Ship', this.ship);

    const resources = new CampaignResource();
    let savvyUpgrades = 0;

    for (let character of this.crew.roster) {
      const res = CharacterGenerator.DevelopCharacter(character);
      resources.consolidate([res.resources]);

      if (res.savvyUpgraded)
        savvyUpgrades += 1;
    }

    this.savvyUpgrades = savvyUpgrades >= this.savvyUpgrades
      ? this.savvyUpgrades
      : savvyUpgrades;

    resources.storyPoints = (this.difficulty === Difficulty.Insanity || !this.useStory)
      ? 0
      : resources.storyPoints;

    resources.storyPoints = (resources.storyPoints ?? 0) + this.initStoryPoints();
    resources.credits = (resources.credits ?? 0) + this.crewSize;

    this.crew.stash.push(...EquipmentGenerator.GenerateStash(this.savvyUpgrades));
    this.crew.leader = this.leader;

    console.log('Campaign Resources', resources);
    console.log('Savvy Upgrades', savvyUpgrades);
    console.log('Leader', this.leader);
    console.log('Crew', this.crew);

    return new Campaign(this, resources);
  }
}
