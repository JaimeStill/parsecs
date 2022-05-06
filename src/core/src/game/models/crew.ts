import { Character } from './character';

import {
  Equipment,
  Weapon
} from './equipment';

export class Crew {
  stash: (Equipment | Weapon)[] = [];

  private _leader: Character | null = null;
  get leader(): Character | null { return this._leader; }

  set leader(character: Character | null) {
    if (this._leader && character)
      return;

    this._leader = character;

    if (character)
      character.promoteLeader();
  }

  private _roster: Character[] = new Array<Character>();

  get roster() { return this._roster; }

  clearRoster = () => this._roster = this.roster.length > 0
    ? this._roster = new Array<Character>()
    : this.roster;

  addCharacter = (character: Character) =>
    !(this.roster.some(c => c.id === character.id))
    && this.roster.push(character);

  addCharacters = (characters: Character[]) =>
    characters.forEach(c => this.addCharacter(c));

  removeCharacter = (character: Character) =>
    this._roster = this.roster.filter(c => !(c.id === character.id));

  removeCharacters = (characters: Character[]) =>
    this._roster = this.roster.filter(c =>
      !characters.includes(c)
    );
}
