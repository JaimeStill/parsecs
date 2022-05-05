import { CharacterDetail } from './character-detail';

import {
  CharacterProfileConfig,
  CharacterProfile
} from './character-profile';

import {
  CharacterRace,
  CharacterSpecies
} from '../../enums';

import {
  Equipment,
  Weapon,
  Sidearm,
  UtilityDevice
} from '../equipment';

export class Character {
  readonly id: Symbol;
  readonly race: CharacterRace;
  readonly species: CharacterSpecies;
  readonly profile: CharacterProfile;

  private _weapons: [Weapon?, Weapon?] = [];
  private _devices: [UtilityDevice?, UtilityDevice?, UtilityDevice?] = [];

  name!: string;
  background!: string;
  motivation!: string;
  class!: string;

  gear: (Equipment | Weapon)[] = new Array<Equipment | Weapon>();
  sidearm: Sidearm | null = null;
  isLeader: boolean = false;

  constructor(
    species: CharacterSpecies,
    {
      maxCombatSkill = 5,
      maxReaction = 6,
      maxSpeed = 8,
      maxToughness = 6,
      maxSavvy = 5,
      maxLuck = 1,
      maxXp = Number.MAX_VALUE,
      reaction = 1,
      speed = 4,
      combatSkill = 0,
      toughness = 3,
      savvy = 0,
      luck = 0,
      xp = 0,
      useConsumables = true,
      useImplants = true,
      eventTarget = true
    }: Partial<CharacterProfileConfig> = {}
  ) {
    this.id = Symbol();
    this.species = species;
    this.profile = new CharacterProfile({
      reaction, maxReaction,
      speed, maxSpeed,
      combatSkill, maxCombatSkill,
      toughness, maxToughness,
      savvy, maxSavvy,
      luck, maxLuck,
      xp, maxXp,
      useConsumables, useImplants,
      eventTarget
    });

    this.race = this.setRace();
  }

  private setRace = (): CharacterRace => {
    switch (this.species) {
      case CharacterSpecies.Engineer:
      case CharacterSpecies.Feral:
      case CharacterSpecies.Hakshan:
      case CharacterSpecies.KErin:
      case CharacterSpecies.Manipulator:
      case CharacterSpecies.Precursor:
      case CharacterSpecies.Soulless:
      case CharacterSpecies.Swift:
        return CharacterRace.Alien;
      case CharacterSpecies.AssaultBot:
      case CharacterSpecies.Bot:
        return CharacterRace.Bot;
      case CharacterSpecies.BioUpgrade:
      case CharacterSpecies.EmoSuppressed:
      case CharacterSpecies.Empath:
      case CharacterSpecies.Feeler:
      case CharacterSpecies.Human:
      case CharacterSpecies.MinorAlien:
      case CharacterSpecies.Mutant:
      case CharacterSpecies.MysteriousPast:
      case CharacterSpecies.Primitive:
        return CharacterRace.Human;
      default:
        return CharacterRace.Strange;
    }
  }

  get weapons(): [Weapon?, Weapon?] { return this._weapons; }

  get devices(): [UtilityDevice?, UtilityDevice?, UtilityDevice?] { return this._devices; }

  promoteLeader = () => {
    this.isLeader = true;
    this.profile.luck += 1;
  }

  applyDetail = (cd: CharacterDetail) => {
    if (cd.effects && cd.effects.length > 0)
      this.profile.applyEffects(cd.effects);

    if (cd.equipment && cd.equipment.length > 0)
      this.gear.push(...cd.equipment);
  }
}

