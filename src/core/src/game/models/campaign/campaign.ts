import { CampaignConfig } from './campaign-config';
import { Crew } from '../crew';
import { CampaignResource } from './campaign-resource';
import { Difficulty } from '../../enums';
import { Ship } from '../ship';
import { VictoryCondition } from './victory-condition';

export class Campaign {
  id: Symbol;
  crewSize: number;
  useStars: boolean;
  useStory: boolean;
  difficulty: Difficulty;
  crew: Crew;
  ship: Ship;
  victory: VictoryCondition | null;
  name: string;

  resources: CampaignResource;

  constructor(config: CampaignConfig, resources: CampaignResource) {
    this.id = Symbol();
    this.name = config.name;
    this.crewSize = config.crewSize;
    this.useStory = config.useStory;
    this.useStars = config.useStars;
    this.difficulty = config.difficulty;
    this.crew = config.crew;
    this.ship = config.ship;
    this.victory = config.victory;

    this.resources = resources;
  }
}
