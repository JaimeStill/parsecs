import { ShipTrait } from './enums';

export class Ship {
  private _damage: number = 0;
  get damage(): number { return this._damage; }
  set damage(value: number) {
    this._damage = value;
  }

  readonly model: string;
  readonly debt: number;
  readonly hull: number;
  readonly trait: ShipTrait | null;

  name!: string;

  constructor(
    model: string,
    debt: number,
    hull: number,
    trait: ShipTrait | null = null
  ) {
    this.model = model;
    this.debt = debt;
    this.hull = hull;
    this.trait = trait;
  }
}
