import { Race } from './race';

export class Character<T extends Race> {
  readonly race: T;

  constructor(race: T) {
    this.race = race;
  }
}
