import { Difficulty } from '../../enums';
import { Crew } from '../crew';
import { VictoryCondition } from './victory-condition';

export interface CampaignConfig {
  name: string;
  crewSize: number;
  storyPoints: number;
  useStory: boolean;
  useStars: boolean;
  difficulty: Difficulty;
  crew: Crew;
  victory: VictoryCondition | null;
}

export class Campaign {
  readonly id: Symbol;
  readonly crewSize: number;
  readonly useStory: boolean;
  readonly useStars: boolean;
  readonly difficulty: Difficulty;
  readonly crew: Crew;
  readonly victory: VictoryCondition | null;

  private _storyPoints: number = 0;

  name: string;

  constructor(
    name: string,
    crew: Crew,
    {
      crewSize = 6,
      storyPoints = 0,
      useStory = true,
      useStars = true,
      difficulty = Difficulty.Normal,
      victory = null
    }: Partial<CampaignConfig> = {}
  ) {
    this.id = Symbol();
    this.name = name;
    this.crewSize = crewSize;
    this.difficulty = difficulty;
    this.crew = crew;
    this.victory = victory;

    this.useStory = difficulty === Difficulty.Insanity
      ? false
      : useStory;

    this.useStars = difficulty === Difficulty.Insanity
      ? false
      : useStars;

    this.storyPoints = this.useStory
      ? storyPoints
      : 0;
  }

  get storyPoints(): number { return this._storyPoints; }

  set storyPoints(value: number) {
    this._storyPoints = this.difficulty === Difficulty.Insanity
      ? 0
      : value;
  }
}
