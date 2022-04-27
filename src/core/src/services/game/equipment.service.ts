import { Injectable } from '@angular/core';

import {
  d100,
  Pistol,
  Melee,
  SingleUse,
  Weapon,
  WeaponTrait
} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  generateLowTechWeapon = (): Weapon => {
    const roll = d100();

    if (roll >= 1 && roll <= 15)
      return new Pistol("Pistol", "Handgun", "Low Tech");
    else if (roll >= 16 && roll <= 35)
      return new Pistol("Pistol", "Scrap Pistol", "Low Tech");
    else if (roll >= 36 && roll <= 40)
      // Machine Pistol
      return new Pistol("Pistol", "Machine Pistol", "Low Tech")
    else if (roll >= 41 && roll <= 65)
      return new Weapon("Weapon", "Colony Rifle", "Low Tech");
    else if (roll >= 66 && roll <= 75)
      return new Weapon("Weapon", "Shotgun", "Low Tech");
    else if (roll >= 76 && roll <= 80)
      return new Weapon("Weapon", "Hunting Rifle", "Low Tech");
    else if (roll >= 81 && roll <= 95)
      return new Melee("Melee", "Blade", "Low Tech");
    else
      return new Melee("Melee", "Brutal Melee Weapon", "Low Tech");
  }
}
