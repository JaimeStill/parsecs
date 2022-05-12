import { v4 as uuid } from 'uuid';

import {
  EquipmentType,
  ProtectiveDeviceType
} from '../../enums';

export abstract class Equipment {
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
}

export class Consumable extends Equipment {}
export class Implant extends Equipment {}
export class UtilityDevice extends Equipment {}
export class OnBoardItem extends Equipment {}
