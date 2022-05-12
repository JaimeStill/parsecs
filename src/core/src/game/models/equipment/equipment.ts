import { v4 as uuid } from 'uuid';

import {
  EquipmentType,
  ProtectiveDeviceType
} from '../../enums';

export class Equipment {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly type: EquipmentType;

  constructor(
    name: string,
    description: string,
    type: EquipmentType,
    id: string | null = null
  ) {
    this.id = id ?? uuid();
    this.name = name;
    this.description = description;
    this.type = type;
  }

  static Restore = (val: any): Equipment => {
    switch (val.type) {
      case EquipmentType.Consumable:
        return new Consumable(
          val.name,
          val.description,
          val.type,
          val.id
        );
      case EquipmentType.Implant:
        return new Implant(
          val.name,
          val.description,
          val.type,
          val.id
        );
      case EquipmentType.OnBoardItem:
        return new OnBoardItem(
          val.name,
          val.description,
          val.type,
          val.id
        );
      case EquipmentType.ProtectiveDevice:
        return new ProtectiveDevice(
          val.name,
          val.description,
          val.type,
          val.deviceType,
          val.id
        );
      case EquipmentType.UtilityDevice:
        return new UtilityDevice(
          val.name,
          val.description,
          val.type,
          val.id
        );
      case EquipmentType.WeaponMod:
        return new WeaponMod(
          val.name,
          val.description,
          val.type,
          val.allowPistol,
          val.id
        );
      case EquipmentType.WeaponSight:
        return new WeaponSight(
          val.name,
          val.description,
          val.type,
          val.pistolOnly,
          val.damanged,
          val.id
        );
      default:
        return new Equipment(
          val.name,
          val.description,
          val.type,
          val.id
        );
    }
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      type: this.type
    }
  }
}

export class ProtectiveDevice extends Equipment {
  readonly deviceType: ProtectiveDeviceType;

  constructor(
    name: string,
    description: string,
    type: EquipmentType,
    deviceType: ProtectiveDeviceType,
    id: string | null = null
  ) {
    super(name, description, type, id);
    this.deviceType = deviceType;
  }

  override toJSON() {
    return {
      ...super.toJSON(),
      deviceType: this.deviceType
    }
  }
}

export class WeaponMod extends Equipment {
  readonly allowPistol: boolean;

  constructor(
    name: string,
    description: string,
    type: EquipmentType,
    allowPistol: boolean,
    id: string | null = null
  ) {
    super(name, description, type, id);
    this.allowPistol = allowPistol;
  }

  override toJSON() {
    return {
      ...super.toJSON(),
      allowPisto: this.allowPistol
    }
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
    damaged: boolean = false,
    id: string | null = null
  ) {
    super(name, description, type, id);
    this.pistolOnly = pistolOnly;
    this.damaged = damaged;
  }

  override toJSON() {
    return {
      ...super.toJSON(),
      pistolOnly: this.pistolOnly,
      damaged: this.damaged
    }
  }
}

export class Consumable extends Equipment {}
export class Implant extends Equipment {}
export class UtilityDevice extends Equipment {}
export class OnBoardItem extends Equipment {}
