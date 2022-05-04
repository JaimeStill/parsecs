import { Constructor } from '../../core';

import {
  WeaponStat,
  WeaponTrait
} from '../../enums';

import {
  WeaponMod,
  WeaponSight
} from './equipment';

export interface WeaponConfig {
  damaged: boolean;
  range: number;
  shots: number;
  damage: number;
  traits: WeaponTrait[];
  mod: WeaponMod | null;
  sight: WeaponSight | null;
}

export interface WeaponEffect {
  points: number,
  stat: WeaponStat
}

export class Weapon {
  private _damaged: boolean = false;
  get damaged(): boolean { return this._damaged; }

  set damaged(value: boolean) {
    if (this.sight)
      this.sight.damaged = value;

    this._damaged = value;
  }

  readonly model: string;
  readonly description: string;
  readonly range: number;
  readonly shots: number;
  readonly damage: number;
  readonly traits: WeaponTrait[];

  hitBonus: number = 0;
  mod!: WeaponMod | null;
  sight!: WeaponSight | null;

  constructor(
    model: string,
    description: string,
    {
      damaged = false,
      range = 0,
      shots = 0,
      damage = 0,
      traits = new Array<WeaponTrait>(),
      mod = null,
      sight = null
    }: Partial<WeaponConfig> = {}
  ) {
    this.model = model;
    this.description = description;
    this.range = range;
    this.shots = shots;
    this.damage = damage;
    this.traits = traits;
    this.mod = mod;
    this.sight = sight;
    this.damaged = damaged;
  }

  hasTrait = (trait: WeaponTrait) =>
    this.traits.some((t: WeaponTrait) => t === trait);

  isType = <T extends Weapon>(t: Constructor<T>) => this instanceof t;

  canAddMod = (mod: WeaponMod) => {
    if (this.mod)
      return false;

    if (this.shots < 2)
      return false;

    if (this.isType(Melee))
      return false;

    if (!(mod.allowPistol) && this.isType(Pistol))
      return false;

    return true;
  }

  canAddSight = (sight: WeaponSight) => {
    if (this.sight)
      return false;

    if (this.shots < 2)
      return false;

    if (this.isType(Melee))
      return false;

    if (sight.pistolOnly && !this.isType(Pistol))
      return false;

    return true;
  }

  addMod = (mod: WeaponMod) =>
    this.mod = this.canAddMod(mod)
      ? mod
      : this.mod;

  addSight = (sight: WeaponSight) =>
    this.sight = this.canAddSight(sight)
      ? sight
      : this.sight;

  removeSight = (): WeaponSight | null => {
    const sight = this.sight;
    this.sight = null;
    return sight;
  }

  swapSight = (weapon: Weapon) => {
    const swap = weapon.sight;
    weapon.sight = this.sight;
    this.sight = swap;
  }
}

export class Sidearm extends Weapon { }
export class Pistol extends Sidearm { }
export class Melee extends Sidearm { }