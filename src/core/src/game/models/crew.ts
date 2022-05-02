import { Character } from './character';

export class Crew {
  private _leader: Character | null  = null;
  get leader(): Character | null { return this._leader; }

  set leader(character: Character | null) {
    if (this.leader && character)
      return;

    this.leader = character;

    if (character)
      character.promoteLeader();
  }

  private _roster: Character[] = new Array<Character>();

  get roster() { return this._roster; }

  addCharacter = (character: Character) =>
    !(this.roster.some(c => c.id === character.id))
      && this.roster.push(character);

  removeCharacter = (character: Character) =>
    this._roster = this.roster.filter(c => !(c.id === character.id));
}
