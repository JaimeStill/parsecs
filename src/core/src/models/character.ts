import { Race } from './race';

export class Character<T extends Race> {
  race: T;

  constructor(race: T) {
    this.race = race;
  }
}
