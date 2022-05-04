import {
  Difficulty,
  VictoryType
} from '../../enums';

export class VictoryCondition {
  readonly iterations: number;
  readonly type: VictoryType;
  readonly difficulties: Array<Difficulty> = new Array<Difficulty>(
    Difficulty.Normal,
    Difficulty.Challenging,
    Difficulty.Hardcore,
    Difficulty.Insanity
  );

  constructor(
    iterations: number,
    type: VictoryType,
    difficulties: Difficulty[] | null = null
  ) {
    this.iterations = iterations;
    this.type = type;
    this.difficulties = difficulties ?? this.difficulties;
  }
}
