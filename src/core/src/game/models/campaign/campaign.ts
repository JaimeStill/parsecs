import { CampaignConfig } from './campaign-config';
import { Crew } from '../crew';
import { CampaignResource } from './campaign-resource';
import { Difficulty } from '../../enums';
import { Ship } from '../ship';
import { VictoryCondition } from './victory-condition';

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

  resources: CampaignResource;

  constructor(config: CampaignConfig, resources: CampaignResource) {
    this.id = Symbol();
    this._name = config.name;
    this.crewSize = config.crewSize;
    this.useStory = config.useStory;
    this.useStars = config.useStars;
    this.difficulty = config.difficulty;
    this.crew = config.crew;
    this.ship = config.ship;
    this.victory = config.victory;

    this.resources = resources;
  }

  get name(): string { return this._name; }
  set name(value: string) { this._name = value; }
}
