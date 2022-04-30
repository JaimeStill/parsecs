import { CharacterStat } from '../enums';

import {
  Equipment,
  Weapon,
  Sidearm,
  UtilityDevice
} from '../equipment';

export interface CharacterConfig {
  reaction: number;
  speed: number;
  combatSkill: number;
  toughness: number;
  savvy: number;
  luck: number;
}

interface CharacterDetailConfig {
  effects: CharacterEffect[] | null,
  resources: Partial<CharacterResource> | null,
  equipment: Weapon | Equipment | null
}

export class CharacterDetail {
  detail: string;
  effects: CharacterEffect[] | null;
  resources: Partial<CharacterResource> | null;
  equipment: Weapon | Equipment | null;

  constructor(
    detail: string,
    {
      effects = null,
      resources = null,
      equipment = null
    }: Partial<CharacterDetailConfig> = {}
  ) {
    this.detail = detail;
    this.effects = effects;
    this.resources = resources;
    this.equipment = equipment;
  }
}

export interface CharacterEffect {
  points: number,
  stat: CharacterStat
}

export interface CharacterResource {
  credits: number | null;
  storyPoints: number | null;
  rumors: number | null;
  patron: boolean  | null;
  rival: boolean | null;
}

export abstract class Character {
  readonly id: Symbol;
  readonly gear: Equipment[] = new Array<Equipment>();
  readonly background!: string;
  readonly motivation!: string;
  readonly class!: string;

  sidearm: Sidearm | null = null;
  isLeader: boolean = false;

  constructor(
    species: string,
    type: string,
    {
      reaction = 1,
      speed = 4,
      combatSkill = 0,
      toughness = 3,
      savvy = 0,
      luck = 0
    }: Partial<CharacterConfig> = {}
  ) {
    this.id = Symbol();
    this._species = species;
    this._type = type;
    this._reaction = reaction;
    this._speed = speed;
    this._combatSkill = combatSkill;
    this._toughness = toughness;
    this._savvy = savvy;
    this._luck = luck;
  }

  protected _species: string;
  get species(): string { return this._species; }

  protected _type: string;
  get type(): string { return this._type; }

  protected _reaction: number;
  get reaction(): number { return this._reaction; }

  set reaction(value: number) {
    this._reaction = value > 6
      ? 6
      : value;
  }

  protected _speed: number;
  get speed(): number { return this._speed; }

  set speed(value: number) {
    this._speed = value > 8
      ? 8
      : value;
  }

  protected _combatSkill: number;
  get combatSkill(): number { return this._combatSkill; }

  set combatSkill(value: number) {
    this._combatSkill = value > 5
      ? 5
      : value;
  }

  protected _toughness: number;
  get toughness(): number { return this._toughness; }

  set toughness(value: number) {
    this._toughness = value > 6
      ? 6
      : value;
  }

  protected _savvy: number;
  get savvy(): number { return this._savvy; }

  set savvy(value: number) {
    this._savvy = value > 5
      ? 5
      : value;
  }
  protected _luck: number;
  get luck(): number { return this._luck; }

  set luck(value: number) {
    this._luck = value > 1
      ? 1
      : value;
  }

  protected _weapons: [Weapon?, Weapon?] = []
  get weapons(): [Weapon?, Weapon?] { return this._weapons; }

  protected _devices: [UtilityDevice?, UtilityDevice?, UtilityDevice?] = []
  get devices(): [UtilityDevice?, UtilityDevice?, UtilityDevice?] { return this._devices; }

  promoteLeader = () => {
    this.isLeader = true;
    this.luck += 1;
  }
}

