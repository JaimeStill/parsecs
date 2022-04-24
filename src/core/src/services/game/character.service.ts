import { Injectable } from '@angular/core';

import {
  d100,
  Alien,
  AssaultBot,
  BioUpgrade,
  Bot,
  Character,
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
  Race,
  Soulless,
  Stalker,
  Swift,
  Traveler,
  UnityAgent
} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private generateAlien = (): Alien => {
    const alienRoll = d100();

    if (alienRoll >= 1 && alienRoll <= 20)
      return new Engineer();
    else if (alienRoll >= 21 && alienRoll <= 40)
      return new KErin();
    else if (alienRoll >= 41 && alienRoll <= 55)
      return new Soulless();
    else if (alienRoll >= 56 && alienRoll <= 70)
      return new Precursor();
    else if (alienRoll >= 71 && alienRoll <= 90)
      return new Feral();
    else
      return new Swift();
  }

  private generateStrange = (): Race => {
    const strangeRoll = d100();

    if (strangeRoll >= 1 && strangeRoll <= 2)
      return new DeConverted();
    else if (strangeRoll >= 3 && strangeRoll <= 8)
      return new UnityAgent();
    else if (strangeRoll >= 9 && strangeRoll <= 17)
      return new MysteriousPast();
    else if (strangeRoll >= 18 && strangeRoll <= 22)
      return new Hakshan();
    else if (strangeRoll >= 23 && strangeRoll <= 27)
      return new Stalker();
    else if (strangeRoll >= 28 && strangeRoll <= 34)
      return new Hulker();
    else if (strangeRoll >= 35 && strangeRoll <= 41)
      return new HopefulRookie();
    else if (strangeRoll >= 42 && strangeRoll <= 47)
      return new GeneticUplift();
    else if (strangeRoll >= 48 && strangeRoll <= 53)
      return new Mutant();
    else if (strangeRoll >= 54 && strangeRoll <= 58)
      return new AssaultBot();
    else if (strangeRoll >= 59 && strangeRoll <= 62)
      return new Manipulator();
    else if (strangeRoll >= 63 && strangeRoll <= 67)
      return new Primitive();
    else if (strangeRoll >= 68 && strangeRoll <= 73)
      return new Feeler();
    else if (strangeRoll >= 74 && strangeRoll <= 79)
      return new EmoSuppressed();
    else if (strangeRoll >= 80 && strangeRoll <= 85)
      return new MinorAlien();
    else if (strangeRoll >= 86 && strangeRoll <= 87)
      return new Traveler();
    else if (strangeRoll >= 88 && strangeRoll <= 93)
      return new Empath();
    else
      return new BioUpgrade();
  }

  generate = (): Character<Race> => {
    let character;
    const typeRoll = d100();

    if (typeRoll >= 1 && typeRoll <= 60)
      character = new Character(new Human());
    else if (typeRoll >= 61 && typeRoll <= 80)
      character = new Character(this.generateAlien());
    else if (typeRoll >= 81 && typeRoll <= 90)
      character = new Character(new Bot());
    else
      character = new Character(this.generateStrange());

    return character;
  }
}
