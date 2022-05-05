import { CharacterEffect } from './character-effect';
import { CharacterStat } from '../../enums';

export interface CharacterProfileConfig {
  maxReaction: number;
  maxSpeed: number;
  maxCombatSkill: number;
  maxToughness: number;
  maxSavvy: number;
  maxLuck: number;
  maxXp: number;
  reaction: number;
  speed: number;
  combatSkill: number;
  toughness: number;
  savvy: number;
  luck: number;
  xp: number;
  useConsumables: boolean;
  useImplants: boolean;
  eventTarget: boolean;
}

export class CharacterProfile {
  readonly maxReaction: number;
  readonly maxSpeed: number;
  readonly maxCombatSkill: number;
  readonly maxToughness: number;
  readonly maxSavvy: number;
  readonly maxLuck: number;
  readonly maxXp: number;

  /*
    Bots cannot use consumables
  */
  readonly useConsumables: boolean;
  /*
    Bots cannot use implants
  */
  readonly useImplants: boolean;
  /*
    Bots cannot be the target of character events
  */
  readonly eventTarget: boolean;

  private _reaction: number = 0;
  private _speed: number = 0;
  private _combatSkill: number = 0;
  private _toughness: number = 0;
  private _savvy: number= 0;
  private _luck: number = 0;
  private _xp: number= 0;

  constructor(
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
    this.maxCombatSkill = maxCombatSkill;
    this.maxReaction = maxReaction;
    this.maxSpeed = maxSpeed;
    this.maxToughness = maxToughness;
    this.maxSavvy = maxSavvy;
    this.maxLuck = maxLuck;
    this.maxXp = maxXp;

    this.reaction = reaction;
    this.speed = speed;
    this.combatSkill = combatSkill;
    this.toughness = toughness;
    this.savvy = savvy;
    this.luck = luck;
    this.xp = xp;

    this.useConsumables = useConsumables;
    this.useImplants = useImplants;
    this.eventTarget = eventTarget;
  }

  get reaction(): number { return this._reaction; }

  set reaction(value: number) {
    this._reaction = value > this.maxReaction
      ? this.maxReaction
      : value;
  }

  get speed(): number { return this._speed; }

  set speed(value: number) {
    this._speed = value > 8
      ? 8
      : value;
  }

  get combatSkill(): number { return this._combatSkill; }

  set combatSkill(value: number) {
    this._combatSkill = value > this.maxCombatSkill
      ? this.maxCombatSkill
      : value;
  }

  get toughness(): number { return this._toughness; }

  set toughness(value: number) {
    this._toughness = value > this.maxToughness
      ? this.maxToughness
      : value;
  }

  get savvy(): number { return this._savvy; }

  set savvy(value: number) {
    this._savvy = value > this.maxSavvy
      ? this.maxSavvy
      : value;
  }

  get luck(): number { return this._luck; }

  set luck(value: number) {
    this._luck = value > this.maxLuck
      ? this.maxLuck
      : value;
  }

  get xp(): number { return this._xp; }

  set xp(value: number) {
    this._xp = value > this.maxXp
      ? this.maxXp
      : value;
  }

  applyEffects = (effects: CharacterEffect[]) =>
    effects.forEach(effect => this.applyEffect(effect));

  applyEffect = (effect: CharacterEffect) => {
    switch (effect.stat) {
      case CharacterStat.CombatSkill:
        this.combatSkill += effect.points;
        break;
      case CharacterStat.Luck:
        this.luck += effect.points;
        break;
      case CharacterStat.Reactions:
        this.reaction += effect.points;
        break;
      case CharacterStat.Savvy:
        this.savvy += effect.points;
        break;
      case CharacterStat.Speed:
        this.speed += effect.points;
        break;
      case CharacterStat.Toughness:
        this.toughness += effect.points;
        break;
      case CharacterStat.XP:
        this.xp += effect.points;
        break;
    }
  }
}
