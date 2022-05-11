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

  isType = <T extends Equipment>(t: Constructor<T>) => this instanceof t;

  getType = (): EquipmentType => {
    switch (true) {
      case (this.isType(ProtectiveDevice)):
        return EquipmentType.ProtectiveDevice;
      case (this.isType(WeaponMod)):
        return EquipmentType.WeaponMod;
      case (this.isType(WeaponSight)):
        return EquipmentType.WeaponSight;
      case (this.isType(Consumable)):
        return EquipmentType.Consumable;
      case (this.isType(Implant)):
        return EquipmentType.Implant;
      case (this.isType(UtilityDevice)):
        return EquipmentType.UtilityDevice;
      case (this.isType(OnBoardItem)):
        return EquipmentType.OnBoardItem;      
      default:
        return EquipmentType.Equipment;
    }
  }
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
}

export class Consumable extends Equipment {}
export class Implant extends Equipment {}
export class UtilityDevice extends Equipment {}
export class OnBoardItem extends Equipment {}
