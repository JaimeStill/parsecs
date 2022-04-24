import { Character } from './character';
import { Race } from './race';

export class Crew {
  private _leader: Character<Race> | null  = null;
  private _roster: Character<Race>[];

  constructor(roster: Array<Character<Race>>) {
    this._roster = roster;
  }

  get leader(): Character<Race> | null { return this._leader; }

  set leader(crew: Character<Race> | null) {
    this.leader && crew
      ? this.leader
      : crew;
  }

  get roster() { return this._roster; }

  addCharacter = (character: Character<Race>) =>
    !(this.roster.some(c => c.id === character.id))
      && this.roster.push(character);

  removeCharacter = (character: Character<Race>) =>
    this._roster = this.roster.filter(c => !(c.id === character.id));
}
