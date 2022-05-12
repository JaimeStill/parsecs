import { CampaignConfig } from './campaign-config';
import { Crew } from '../crew';
import { CampaignResource } from './campaign-resource';
import { Difficulty } from '../../enums';
import { ShipGenerator } from '../../generators';
import { Ship } from '../ship';
import { VictoryCondition } from './victory-condition';
import { v4 as uuid } from 'uuid';

export class Campaign {
  readonly id: string;
  readonly crewSize: number;
  readonly useStars: boolean;
  readonly useStory: boolean;
  readonly difficulty: Difficulty;
  readonly crew: Crew;
  readonly ship: Ship;
  readonly victory: VictoryCondition | null;

  name: string;
  resources: CampaignResource;

  constructor(
    {
      name = '',
      crewSize = 6,
      useStory = true,
      useStars = true,
      difficulty = Difficulty.Normal,
      crew = new Crew(),
      ship = ShipGenerator.Generate(),
      victory = null
    }: Partial<CampaignConfig> = {},
    resources: CampaignResource,
    id: string | null = null
  ) {
    this.id = id ?? uuid();
    this.name = name;
    this.crewSize = crewSize;
    this.useStory = useStory;
    this.useStars = useStars;
    this.difficulty = difficulty;
    this.crew = crew;
    this.ship = ship;
    this.victory = victory;

    this.resources = resources;
  }

  static Restore = (val: any): Campaign =>
    new Campaign(
      {
        name: val.name,
        crewSize: val.crewSize,
        useStory: val.useStory,
        useStars: val.useStars,
        difficulty: val.difficulty,
        victory: val.victory,
        ship: Ship.Restore(val.ship),
        crew: Crew.Restore(val.crew)
      },
      CampaignResource.Restore(val.resources),
      val.id
    );

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      crewSize: this.crewSize,
      useStory: this.useStory,
      useStars: this.useStars,
      difficulty: this.difficulty,
      crew: this.crew,
      ship: this.ship,
      victory: this.victory,
      resources: this.resources
    }
  }
}
