import { Character } from './character';

import {
  Equipment,
  Weapon
} from './equipment';

export class Crew {
  roster: Character[];
  stash: Equipment[];
  armory: Weapon[];

  private _leader: Character | null;
  get leader(): Character | null { return this._leader; }

  set leader(character: Character | null) {
    if (this._leader && character)
      return;

    this._leader = character;

    if (character)
      character.promoteLeader();
  }

  constructor({
    stash = new Array<Equipment>(),
    armory = new Array<Weapon>(),
    roster = new Array<Character>(),
    leader = null
  }: Partial<Crew> = {}) {
    this.stash = stash;
    this.armory = armory;
    this.roster = roster;
    this._leader = leader;
  }

  clearRoster = () => this.roster = this.roster.length > 0
    ? this.roster = new Array<Character>()
    : this.roster;

  addCharacter = (character: Character) =>
    !(this.roster.some(c => c.id === character.id))
    && this.roster.push(character);

  addCharacters = (characters: Character[]) =>
    characters.forEach(c => this.addCharacter(c));

  removeCharacter = (character: Character) =>
    this.roster = this.roster.filter(c => !(c.id === character.id));

  removeCharacters = (characters: Character[]) =>
    this.roster = this.roster.filter(c =>
      !characters.includes(c)
    );

  static Restore = (val: any) =>
    new Crew({
      roster: val.roster.map((c: any) => Character.Restore(c)),
      stash: val.stash.map((e: any) => Equipment.Restore(e)),
      armory: val.armory.map((w: any) => Weapon.Restore(w)),
      leader: Character.Restore(val.leader)
    });

  toJSON() {
    return {
      roster: this.roster,
      stash: this.stash,
      armory: this.armory,
      leader: this.leader
    }
  }
}
