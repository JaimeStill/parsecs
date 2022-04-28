import { d100 } from '../dice';
import { WeaponTrait } from '../enums';

import {
  Pistol,
  Melee,
  Weapon
} from '../equipment';

export abstract class WeaponGenerator {
  static LowTech = (): Weapon => {
    const roll = d100();

    if (roll >= 1 && roll <= 15)
      return new Pistol("Handgun", "Low Tech", {
        range: 12,
        shots: 1,
        traits: [WeaponTrait.Pistol]
      });
    else if (roll >= 16 && roll <= 35)
      return new Pistol("Scrap Pistol", "Low Tech", {
        range: 9,
        shots: 1,
        traits: [WeaponTrait.Pistol]
      });
    else if (roll >= 36 && roll <= 40)
      return new Pistol("Machine Pistol", "Low Tech", {
        range: 8,
        shots: 2,
        traits: [
          WeaponTrait.Pistol,
          WeaponTrait.Focused
        ]
      })
    else if (roll >= 41 && roll <= 65)
      return new Weapon("Colony Rifle", "Low Tech", {
        range: 18,
        shots: 1
      });
    else if (roll >= 66 && roll <= 75)
      return new Weapon("Shotgun", "Low Tech", {
        range: 12,
        shots: 2,
        damage: 1,
        traits: [WeaponTrait.Focused]
      });
    else if (roll >= 76 && roll <= 80)
      return new Weapon("Hunting Rifle", "Low Tech", {
        range: 30,
        shots: 1,
        damage: 1,
        traits: [WeaponTrait.Heavy]
      });
    else if (roll >= 81 && roll <= 95)
      return new Melee("Blade", "Low Tech", {
        traits: [WeaponTrait.Melee]
      });
    else
      return new Melee("Brutal Melee Weapon", "Low Tech", {
        damage: 1,
        traits: [
          WeaponTrait.Melee,
          WeaponTrait.Clumsy
        ]
      });
  }

  static Military = (): Weapon => {
    const roll = d100();

    if (roll >= 1 && roll <= 25)
      return new Weapon("Military Rifle", "Military", {
        range: 24,
        shots: 1
      });
    else if (roll >= 26 && roll <= 45)
      return new Weapon("Infantry Laser", "Military", {
        range: 30,
        shots: 1,
        traits: [WeaponTrait.SnapShot]
      });
    else if (roll >= 46 && roll <= 50)
      return new Weapon("Marksman's Rifle", "Military", {
        range: 36,
        shots: 1,
        traits: [WeaponTrait.Heavy]
      });
    else if (roll >= 51 && roll <= 60)
      return new Weapon("Needle Rifle", "Military", {
        range: 18,
        shots: 2,
        traits: [WeaponTrait.Critical]
      });
    else if (roll >= 61 && roll <= 75)
      return new Weapon("Auto Rifle", "Military", {
        range: 24,
        shots: 2
      });
    else if (roll >= 76 && roll <= 80)
      return new Weapon("Rattle Gun", "Military", {
        range: 24,
        shots: 3,
        traits: [WeaponTrait.Heavy]
      });
    else if (roll >= 81 && roll <= 95)
      return new Melee("Boarding Saber", "Military", {
        damage: 1,
        traits: [
          WeaponTrait.Melee,
          WeaponTrait.Elegant
        ]
      })
    else
      return new Melee("Shatter Axe", "Military", {
        damage: 2,
        traits: [WeaponTrait.Melee]
      });
  }

  static HighTech = (): Weapon => {
    const roll = d100();

    if (roll >= 1 && roll <= 5)
      return new Pistol("Dueling Pistol", "High Tech", {
        range: 8,
        shots: 1,
        traits: [
          WeaponTrait.Pistol,
          WeaponTrait.Critical
        ]
      });
    else if (roll >= 6 && roll <= 15)
      return new Pistol("Hand Cannon", "High Tech", {
        range: 8,
        shots: 1,
        damage: 2,
        traits: [WeaponTrait.Pistol]
      });
    else if (roll >= 16 && roll <= 30)
      return new Pistol("Hand Laser", "High Tech", {
        range: 12,
        shots: 1,
        traits: [
          WeaponTrait.Pistol,
          WeaponTrait.SnapShot
        ]
      });
    else if (roll >= 31 && roll <= 45)
      return new Pistol("Beam Pistol", "High Tech", {
        range: 10,
        shots: 1,
        damage: 1,
        traits: [
          WeaponTrait.Pistol,
          WeaponTrait.Critical
        ]
      });
    else if (roll >= 46 && roll <= 55)
      return new Weapon("Infantry Laser", "High Tech", {
        range: 30,
        shots: 1,
        traits: [WeaponTrait.SnapShot]
      });
    else if (roll >= 56 && roll <= 70)
      return new Pistol("Blast Pistol", "High Tech", {
        range: 8,
        shots: 1,
        damage: 1,
        traits: [WeaponTrait.Pistol]
      });
    else if (roll >= 71 && roll <= 80)
      return new Weapon("Blast Rifle", "High Tech", {
        range: 16,
        shots: 1,
        damage: 1
      });
    else if (roll >= 81 && roll <= 85)
      return new Weapon("Plasma Rifle", "High Tech", {
        range: 20,
        shots: 2,
        damage: 1,
        traits: [
          WeaponTrait.Focused,
          WeaponTrait.Piercing
        ]
      });
    else
      return new Melee("Glare Sword", "High Tech", {
        traits: [
          WeaponTrait.Melee,
          WeaponTrait.Elegant,
          WeaponTrait.Piercing
        ]
      });
  }
}
