import { Extent } from '../types';

export class GeneratorOption<T> {
  readonly value: T;
  readonly extent: Extent;

  constructor(
    extent: Extent,
    value: T,
  ) {
    this.extent = extent;
    this.value = value;
  }

  selected = (roll: number) =>
    roll >= this.extent[0] && roll <= this.extent[1];
}

const validateGenerator = <T>(roll: number, values: Array<GeneratorOption<T>>): boolean =>
  values.some(v => v.selected(roll));

export const Generator = <T>(die: () => number, values: Array<GeneratorOption<T>>): T => {
  let roll = die();

  if (!validateGenerator(roll, values))
    throw new RangeError(`Roll of ${roll} does not fall into the extent of any provided options`);

  const value = values.find(v => v.selected(roll))?.value;

  if (value) return value;

  throw new Error(`Value resulting from roll of ${roll} was undefined`);
}
