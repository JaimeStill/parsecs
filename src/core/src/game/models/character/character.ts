import { CharacterDetail } from './character-detail';
import { v4 as uuid } from 'uuid';

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

export interface CharacterConfig {
  id: string | null;
  name: string;
  background: string;
  motivation: string;
  charClass: string;
  equipment: Equipment[];
  weapons: Weapon[];
  devices: [UtilityDevice?, UtilityDevice?, UtilityDevice?];
  sidearm: Sidearm | null;
  isLeader: boolean;
}

export class Character {
  readonly id: string;
  readonly race: CharacterRace;
  readonly species: CharacterSpecies;
  readonly profile: CharacterProfile;

  name: string;
  background: string;
  motivation: string;
  charClass: string;

  equipment: Equipment[] = new Array<Equipment>();
  weapons: Weapon[] = new Array<Weapon>();
  devices: [UtilityDevice?, UtilityDevice?, UtilityDevice?];
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
    }: Partial<CharacterProfileConfig> = {},
    {
      id = null,
      name = '',
      background = '',
      charClass = '',
      motivation = '',
      devices = [],
      equipment = new Array<Equipment>(),
      weapons = new Array<Weapon>(),
      isLeader = false,
      sidearm = null
    }: Partial<CharacterConfig> = {}
  ) {
    this.id = id ?? uuid();
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

    this.name = name;
    this.background = background;
    this.charClass = charClass;
    this.motivation = motivation;
    this.devices = devices;
    this.equipment = equipment;
    this.weapons = weapons;
    this.isLeader = isLeader;
    this.sidearm = sidearm;

    this.race = this.setRace();
  }

  static Restore = (val: any): Character =>
    new Character(
      val.species,
      CharacterProfile.Restore(val.profile),
      {
        id: val.id,
        name: val.name,
        background: val.background,
        charClass: val.charClass,
        motivation: val.motivation,
        devices: val.devices.map((d: any) => UtilityDevice.Restore(d)),
        equipment: val.equipment.map((e: any) => Equipment.Restore(e)),
        weapons: val.weapons.map((w: any) => Weapon.Restore(w)),
        isLeader: val.isLeader,
        sidearm: val.sidearm ? Sidearm.Restore(val.sidearm) : null
      }
    );

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

  promoteLeader = () => {
    this.isLeader = true;
    this.profile.luck += 1;
  }

  applyDetail = (cd: CharacterDetail) => {
    if (cd.effects && cd.effects.length > 0)
      this.profile.applyEffects(cd.effects);

    if (cd.equipment && cd.equipment.length > 0)
      this.equipment.push(...cd.equipment);

    if (cd.weapons && cd.weapons.length > 0)
      this.weapons.push(...cd.weapons);
  }
}

