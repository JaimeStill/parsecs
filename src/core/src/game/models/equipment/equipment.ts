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
    description: string,
    type: EquipmentType
  ) {
    this.id = Symbol();
    this.name = name;
    this.description = description;
    this.type = type;
  }
}

export class ProtectiveDevice extends Equipment {
  readonly deviceType: ProtectiveDeviceType

  constructor(
    name: string,
    description: string,
    type: EquipmentType,
    deviceType: ProtectiveDeviceType
  ) {
    super(name, description, type);
    this.deviceType = deviceType;
  }
}

export class WeaponMod extends Equipment {
  readonly allowPistol: boolean;

  constructor(
    name: string,
    description: string,
    type: EquipmentType,
    allowPistol: boolean
  ) {
    super(name, description, type);
    this.allowPistol = allowPistol;
  }
}

export class WeaponSight extends Equipment {
  readonly pistolOnly: boolean;
  damaged: boolean;

  constructor(
    name: string,
    description: string,
    type: EquipmentType,
    pistolOnly: boolean,
    damaged: boolean = false
  ) {
    super(name, description, type);
    this.pistolOnly = pistolOnly;
    this.damaged = damaged;
  }
}

export class Consumable extends Equipment {}
export class Implant extends Equipment {}
export class UtilityDevice extends Equipment {}
export class OnBoardItem extends Equipment {}
