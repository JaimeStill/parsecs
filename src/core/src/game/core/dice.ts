interface DiceRoll {
  four: number;
  six: number;
  eight: number;
  ten: number;
  twelve: number;
  twenty: number;
  hundred: number;
}

interface DieRoll {
  sides: number;
  result: number;
}

export interface DiceResult {
  total: number;
  rolls: Array<DieRoll>
}

export const die = (sides: number) => () =>
  Math.floor(Math.random() * sides) + 1;

export const d4 = die(4);
export const d6 = die(6);
export const d8 = die(8);
export const d10 = die(10);
export const d12 = die(12);
export const d20 = die(20);
export const d100 = die(100);

export const dice = ({
  four = 0,
  six = 0,
  eight = 0,
  ten = 0,
  twelve = 0,
  twenty = 0,
  hundred = 0
}: Partial<DiceRoll>): DiceResult => {
  const result = {} as DiceResult;
  result.rolls = new Array();

  if (four > 0) {
    for (four; four > 0; four--)
      result.rolls.push({ sides: 4, result: d4() })
  }

  if (six > 0) {
    for (six; six > 0; six--)
      result.rolls.push({ sides: 6, result: d6() })
  }

  if (eight > 0) {
    for (eight; eight > 0; eight--)
    result.rolls.push({ sides: 8, result: d8() })
  }

  if (ten > 0) {
    for (ten; ten > 0; ten--)
      result.rolls.push({ sides: 10, result: d10() })
  }

  if (twelve > 0) {
    for (twelve; twelve > 0; twelve--)
      result.rolls.push({ sides: 12, result: d12() })
  }

  if (twenty > 0) {
    for (twenty; twenty > 0; twenty--)
      result.rolls.push({ sides: 20, result: d20() })
  }

  if (hundred > 0) {
    for (hundred; hundred > 0; hundred--)
      result.rolls.push({ sides: 100, result: d100() })
  }

  result.total = result
    .rolls
    .map((roll: DieRoll) => roll.result)
    .reduce((total: number = 0, current: number) => total + current);

  return result;
}
