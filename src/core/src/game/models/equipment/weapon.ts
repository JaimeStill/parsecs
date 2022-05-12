import { Constructor } from '../../core';
import { v4 as uuid } from 'uuid';

import {
  WeaponStat,
  WeaponTrait,
  WeaponType
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
  hitBonus: number;
  type: WeaponType | null;
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

  readonly id: string;
  readonly model: string;
  readonly description: string;
  readonly range: number;
  readonly shots: number;
  readonly damage: number;
  readonly type: WeaponType;
  readonly traits: WeaponTrait[];

  hitBonus: number;
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
      hitBonus = 0,
      type = null,
      traits = new Array<WeaponTrait>(),
      mod = null,
      sight = null,

    }: Partial<WeaponConfig> = {},
    id: string | null = null
  ) {
    this.id = id ?? uuid();
    this.model = model;
    this.description = description;
    this.range = range;
    this.shots = shots;
    this.damage = damage;
    this.hitBonus = hitBonus;
    this.traits = traits;
    this.mod = mod;
    this.sight = sight;
    this.damaged = damaged;
    this.type = type ?? this.getType();
  }

  static Restore = (val: any): Weapon => {
    switch (val.type) {
      case WeaponType.Melee:
        return new Melee(
          val.model,
          val.description,
          {
            damaged: val.damanged,
            range: val.range,
            shots: val.shots,
            damage: val.damage,
            hitBonus: val.hitBonus,
            type: val.type,
            traits: val.traits,
            mod: val.mod,
            sight: val.sight
          },
          val.id
        );
      case WeaponType.Pistol:
        return new Pistol(
          val.model,
          val.description,
          {
            damaged: val.damanged,
            range: val.range,
            shots: val.shots,
            damage: val.damage,
            hitBonus: val.hitBonus,
            type: val.type,
            traits: val.traits,
            mod: val.mod,
            sight: val.sight
          },
          val.id
        );
      case WeaponType.Sidearm:
        return new Sidearm(
          val.model,
          val.description,
          {
            damaged: val.damanged,
            range: val.range,
            shots: val.shots,
            damage: val.damage,
            hitBonus: val.hitBonus,
            type: val.type,
            traits: val.traits,
            mod: val.mod,
            sight: val.sight
          },
          val.id
        );
      default:
        return new Weapon(
          val.model,
          val.description,
          {
            damaged: val.damanged,
            range: val.range,
            shots: val.shots,
            damage: val.damage,
            hitBonus: val.hitBonus,
            type: val.type,
            traits: val.traits,
            mod: val.mod,
            sight: val.sight
          },
          val.id
        );
    }
  }

  toJSON() {
    return {
      id: this.id,
      model: this.model,
      description: this.description,
      range: this.range,
      shots: this.shots,
      damage: this.damage,
      hitBonus: this.hitBonus,
      type: this.type,
      traits: this.traits,
      mod: this.mod,
      sight: this.sight,
      damaged: this.damaged
    }
  }

  hasTrait = (trait: WeaponTrait) =>
    this.traits.some((t: WeaponTrait) => t === trait);

  isType = <T extends Weapon>(t: Constructor<T>) => this instanceof t;

  getType = (): WeaponType => {
    switch (true) {
      case (this.isType(Melee)):
        return WeaponType.Melee;
      case (this.isType(Pistol)):
        return WeaponType.Pistol;
      case (this.isType(Sidearm)):
        return WeaponType.Sidearm;
      default:
        return WeaponType.Weapon;
    }
  }

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
