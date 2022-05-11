import { Constructor } from '../../core';

import {
  EquipmentType,
  ProtectiveDeviceType
} from '../../enums';

export abstract class Equipment {
  readonly id: Symbol;
  readonly name: string;
  readonly description: string;
  readonly type: EquipmentType;

  constructor(
    name: string,
    description: string
  ) {
    this.id = Symbol();
    this.name = name;
    this.description = description;
    this.type = this.getType();
  }

  getType = (): EquipmentType =>
    EquipmentType.Equipment;
}

export class ProtectiveDevice extends Equipment {
  readonly type: ProtectiveDeviceType

  constructor(
    name: string,
    description: string,
    type: ProtectiveDeviceType
  ) {
    super(name, description);
    this.type = type;
  }

  override getType = (): EquipmentType =>
    EquipmentType.ProtectiveDevice;
}

export class WeaponMod extends Equipment {
  readonly allowPistol: boolean;

  constructor(
    name: string,
    description: string,
    allowPistol: boolean
  ) {
    super(name, description);
    this.allowPistol = allowPistol;
  }

  override getType = (): EquipmentType =>
    EquipmentType.WeaponMod;
}

export class WeaponSight extends Equipment {
  readonly pistolOnly: boolean;
  damaged: boolean;

  constructor(
    name: string,
    description: string,
    pistolOnly: boolean,
    damaged: boolean = false
  ) {
    super(name, description);
    this.pistolOnly = pistolOnly;
    this.damaged = damaged;
  }

  override getType = (): EquipmentType =>
    EquipmentType.WeaponSight;
}

export class Consumable extends Equipment {
  override getType = (): EquipmentType =>
    EquipmentType.Consumable;
}

export class Implant extends Equipment {
  override getType = (): EquipmentType =>
    EquipmentType.Implant;
}

export class UtilityDevice extends Equipment {
  override getType = (): EquipmentType =>
    EquipmentType.UtilityDevice;
}

export class OnBoardItem extends Equipment {
  override getType = (): EquipmentType =>
    EquipmentType.OnBoardItem;
}
