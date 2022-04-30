import { d100 } from '../dice';
import { WeaponTrait } from '../enums';

import {
  Pistol,
  Melee,
  Weapon
} from '../equipment';

import {
  Generator,
  GeneratorOption
} from './generator';

export abstract class WeaponGenerator {
  static GenerateLowTech = (): Weapon =>
    Generator(d100, this.LowTechTable);

  static GenerateMilitary = (): Weapon =>
    Generator(d100, this.MilitaryTable);

  static GenerateHighTech = (): Weapon =>
    Generator(d100, this.HighTechTable);

  static LowTechTable = new Array<GeneratorOption<Weapon>>(
    new GeneratorOption(
      [1, 15], new Pistol(`Handgun`, `Low Tech`, {
        range: 12,
        shots: 1,
        traits: [WeaponTrait.Pistol]
      })
    ),
    new GeneratorOption(
      [16, 35], new Pistol("Scrap Pistol", "Low Tech", {
        range: 9,
        shots: 1,
        traits: [WeaponTrait.Pistol]
      })
    ),
    new GeneratorOption(
      [36, 40], new Pistol("Machine Pistol", "Low Tech", {
        range: 8,
        shots: 2,
        traits: [
          WeaponTrait.Pistol,
          WeaponTrait.Focused
        ]
      })
    ),
    new GeneratorOption(
      [41, 65], new Weapon("Colony Rifle", "Low Tech", {
        range: 18,
        shots: 1
      })
    ),
    new GeneratorOption(
      [66, 75], new Weapon("Shotgun", "Low Tech", {
        range: 12,
        shots: 2,
        damage: 1,
        traits: [WeaponTrait.Focused]
      })
    ),
    new GeneratorOption(
      [76, 80], new Weapon("Hunting Rifle", "Low Tech", {
        range: 30,
        shots: 1,
        damage: 1,
        traits: [WeaponTrait.Heavy]
      })
    ),
    new GeneratorOption(
      [81, 95], new Melee("Blade", "Low Tech", {
        traits: [WeaponTrait.Melee]
      })
    ),
    new GeneratorOption(
      [96, 100], new Melee("Brutal Melee Weapon", "Low Tech", {
        damage: 1,
        traits: [
          WeaponTrait.Melee,
          WeaponTrait.Clumsy
        ]
      })
    )
  );

  static MilitaryTable = new Array<GeneratorOption<Weapon>>(
    new GeneratorOption(
      [1, 25], new Weapon("Military Rifle", "Military", {
        range: 24,
        shots: 1
      })
    ),
    new GeneratorOption(
      [26, 45], new Weapon("Infantry Laser", "Military", {
        range: 30,
        shots: 1,
        traits: [WeaponTrait.SnapShot]
      })
    ),
    new GeneratorOption(
      [46, 50], new Weapon("Marksman's Rifle", "Military", {
        range: 36,
        shots: 1,
        traits: [WeaponTrait.Heavy]
      })
    ),
    new GeneratorOption(
      [51, 60], new Weapon("Needle Rifle", "Military", {
        range: 18,
        shots: 2,
        traits: [WeaponTrait.Critical]
      })
    ),
    new GeneratorOption(
      [61, 75], new Weapon("Auto Rifle", "Military", {
        range: 24,
        shots: 2
      })
    ),
    new GeneratorOption(
      [76, 80], new Weapon("Rattle Gun", "Military", {
        range: 24,
        shots: 3,
        traits: [WeaponTrait.Heavy]
      })
    ),
    new GeneratorOption(
      [81, 95], new Melee("Boarding Saber", "Military", {
        damage: 1,
        traits: [
          WeaponTrait.Melee,
          WeaponTrait.Elegant
        ]
      })
    ),
    new GeneratorOption(
      [96, 100], new Melee("Shatter Axe", "Military", {
        damage: 2,
        traits: [WeaponTrait.Melee]
      })
    )
  );

  static HighTechTable = new Array<GeneratorOption<Weapon>>(
    new GeneratorOption(
      [1, 5], new Pistol("Dueling Pistol", "High Tech", {
        range: 8,
        shots: 1,
        traits: [
          WeaponTrait.Pistol,
          WeaponTrait.Critical
        ]
      })
    ),
    new GeneratorOption(
      [6, 15], new Pistol("Hand Cannon", "High Tech", {
        range: 8,
        shots: 1,
        damage: 2,
        traits: [WeaponTrait.Pistol]
      })
    ),
    new GeneratorOption(
      [16, 30], new Pistol("Hand Laser", "High Tech", {
        range: 12,
        shots: 1,
        traits: [
          WeaponTrait.Pistol,
          WeaponTrait.SnapShot
        ]
      })
    ),
    new GeneratorOption(
      [31, 45], new Pistol("Beam Pistol", "High Tech", {
        range: 10,
        shots: 1,
        damage: 1,
        traits: [
          WeaponTrait.Pistol,
          WeaponTrait.Critical
        ]
      })
    ),
    new GeneratorOption(
      [46, 55], new Weapon("Infantry Laser", "High Tech", {
        range: 30,
        shots: 1,
        traits: [WeaponTrait.SnapShot]
      })
    ),
    new GeneratorOption(
      [56, 70], new Pistol("Blast Pistol", "High Tech", {
        range: 8,
        shots: 1,
        damage: 1,
        traits: [WeaponTrait.Pistol]
      })
    ),
    new GeneratorOption(
      [71, 80], new Weapon("Blast Rifle", "High Tech", {
        range: 16,
        shots: 1,
        damage: 1
      })
    ),
    new GeneratorOption(
      [81, 85], new Weapon("Plasma Rifle", "High Tech", {
        range: 20,
        shots: 2,
        damage: 1,
        traits: [
          WeaponTrait.Focused,
          WeaponTrait.Piercing
        ]
      })
    ),
    new GeneratorOption(
      [86, 100], new Melee("Glare Sword", "High Tech", {
        traits: [
          WeaponTrait.Melee,
          WeaponTrait.Elegant,
          WeaponTrait.Piercing
        ]
      })
    )
  );
}
