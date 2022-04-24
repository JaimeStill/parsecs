import { Race } from './race';

export class Character<T extends Race> {
  readonly id: Symbol;
  readonly race: T;

  constructor(race: T) {
    this.id = Symbol();
    this.race = race;
  }
}
