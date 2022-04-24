import { Difficulty } from './enums';
import { Crew } from './crew';
import { d6 } from './dice';

export interface CampaignConfig {
  crewSize: number;
  useStory: boolean;
  useStars: boolean;
  difficulty: Difficulty;
}

export class Campaign {
  id: Symbol;
  private _crewSize: number;
  private _useStory: boolean;
  private _useStars: boolean;
  private _storyPoints: number;
  private _difficulty: Difficulty;
  private _crew: Crew | null = null;

  private initStoryPoints = (): number => {
    const points = d6();

    switch (this._difficulty) {
      case Difficulty.Hardcore:
        return points;
      case Difficulty.Insanity:
        return 0;
      default:
        return points + 1;
    }
  }

  constructor(
    {
      crewSize = 6,
      useStory = true,
      useStars = true,
      difficulty = Difficulty.Normal
    }: Partial<CampaignConfig> = {}
  ) {
    this.id = Symbol();
    this._crewSize = crewSize;
    this._useStory = useStory;
    this._difficulty = difficulty;

    this._useStars = difficulty === Difficulty.Insanity
      ? false
      : useStars;

    this._storyPoints = this.initStoryPoints();
  }

  get crewSize(): number { return this._crewSize; }
  get useStory(): boolean { return this._useStory; }
  get useStars(): boolean { return this._useStars; }
  get difficulty(): Difficulty { return this._difficulty; }
  get crew(): Crew | null { return this._crew; }

  get storyPoints(): number { return this._storyPoints; }

  set storyPoints(value: number) {
    this._storyPoints = this.difficulty === Difficulty.Insanity
      ? 0
      : value;
  }

  initCrew = (crew: Crew) =>
    this._crew = this.crew === null
    ? crew
    : this.crew;
}
