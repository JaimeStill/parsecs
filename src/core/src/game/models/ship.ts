import { ShipTrait } from '../enums';
import { v4 as uuid } from 'uuid';

export class Ship {
  private _damage: number = 0;
  get damage(): number { return this._damage; }
  set damage(value: number) {
    this._damage = value;
  }

  readonly id: string;
  readonly model: string;
  readonly debt: number;
  readonly hull: number;
  readonly trait: ShipTrait | null;

  name!: string;

  constructor(
    model: string,
    debt: number,
    hull: number,
    trait: ShipTrait | null = null,
    id: string | null = null
  ) {
    this.id = id ?? uuid();
    this.model = model;
    this.debt = debt;
    this.hull = hull;
    this.trait = trait;
  }

  static Restore = (val: any): Ship => {
    const res = new Ship(
      val.model,
      val.debt,
      val.hull,
      val.trait,
      val.id
    );

    res.damage = val.damage;

    return res;
  }

  toJSON() {
    return {
      id: this.id,
      model: this.model,
      debt: this.debt,
      hull: this.hull,
      trait: this.trait,
      damage: this.damage
    }
  }
}
