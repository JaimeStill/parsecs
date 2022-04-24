import {
  Alien,
  AssaultBot,
  BioUpgrade,
  Bot,
  DeConverted,
  EmoSuppressed,
  Empath,
  Engineer,
  Feeler,
  Feral,
  GeneticUplift,
  Hakshan,
  HopefulRookie,
  Hulker,
  Human,
  KErin,
  Manipulator,
  MinorAlien,
  Mutant,
  MysteriousPast,
  Precursor,
  Primitive,
  RaceConfig,
  Race,
  Soulless,
  Stalker,
  Strange,
  Swift,
  Traveler,
  UnityAgent
 } from './race';

 import { d100 } from './dice';

export class Character<T extends Race> {
  readonly id: Symbol;
  readonly race: T;

  constructor(race: T) {
    this.id = Symbol();
    this.race = race;
  }
}
