export interface RaceConfig {
  reaction: number;
  speed: number;
  combatSkill: number;
  toughness: number;
  savvy: number;
  luck: number;
}

export abstract class Race {
  protected _species: string;
  protected _type: string;
  protected _reaction: number;
  protected _speed: number;
  protected _combatSkill: number;
  protected _toughness: number;
  protected _savvy: number;
  protected _luck: number;

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
    }: Partial<RaceConfig> = {}
  ) {
    this._species = species;
    this._type = type;
    this._reaction = reaction;
    this._speed = speed;
    this._combatSkill = combatSkill;
    this._toughness = toughness;
    this._savvy = savvy;
    this._luck = luck;
  }

  get species(): string {
    return this._species;
  }

  get type(): string {
    return this._type;
  }

  get reaction(): number {
    return this._reaction;
  }

  set reaction(value: number) {
    this._reaction = value > 6
      ? 6
      : value;
  }

  get speed(): number {
    return this._speed;
  }

  set speed(value: number) {
    this._speed = value > 8
      ? 8
      : value;
  }

  get combatSkill(): number {
    return this._combatSkill;
  }

  set combatSkill(value: number) {
    this._combatSkill = value > 5
      ? 5
      : value;
  }

  get toughness(): number {
    return this._toughness;
  }

  set toughness(value: number) {
    this._toughness = value > 6
      ? 6
      : value;
  }

  get savvy(): number {
    return this._savvy;
  }

  set savvy(value: number) {
    this._savvy = value > 5
      ? 5
      : value;
  }

  get luck(): number {
    return this._luck;
  }

  set luck(value: number) {
    this._luck = value > 1
      ? 1
      : value;
  }
}

