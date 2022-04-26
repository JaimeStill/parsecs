import { WeaponTrait } from '../enums';

export interface WeaponConfig {
  range: number;
  shots: number | null;
  damage: number;
  traits: WeaponTrait[] | null;
}

export abstract class Weapon {
  protected _kind: string;
  protected _model: string;
  protected _description: string;
  protected _range: number;
  protected _shots: number | null;
  protected _damage: number;
  protected _traits: WeaponTrait[] | null;

  constructor(
    kind: string,
    model: string,
    description: string,
    {
      range = 0,
      shots = null,
      damage = 0,
      traits = null
    }: Partial<WeaponConfig>
  ) {
    this._kind = kind;
    this._model = model;
    this._description = description;
    this._range = range;
    this._shots = shots;
    this._damage = damage;
    this._traits = traits;
  }
}

export interface WeaponAttachemnt {
  _name: string;
  _description: string;
}
