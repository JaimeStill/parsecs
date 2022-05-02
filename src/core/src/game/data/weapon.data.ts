import { Datalist } from '../core';
import { WeaponTrait } from '../enums';

import {
  Melee,
  Pistol,
  Weapon
} from '../models';

export const HighTechWeapons = {
  DuelingPistol: () => new Pistol("Dueling Pistol", "High Tech", {
    range: 8,
    shots: 1,
    traits: [
      WeaponTrait.Pistol,
      WeaponTrait.Critical
    ]
  }),
  HandCannon: () => new Pistol("Hand Cannon", "High Tech", {
    range: 8,
    shots: 1,
    damage: 2,
    traits: [WeaponTrait.Pistol]
  }),
  HandLaser: () => new Pistol("Hand Laser", "High Tech", {
    range: 12,
    shots: 1,
    traits: [
      WeaponTrait.Pistol,
      WeaponTrait.SnapShot
    ]
  }),
  BeamPistol: () => new Pistol("Beam Pistol", "High Tech", {
    range: 10,
    shots: 1,
    damage: 1,
    traits: [
      WeaponTrait.Pistol,
      WeaponTrait.Critical
    ]
  }),
  InfantryLaser: () => new Weapon("Infantry Laser", "High Tech", {
    range: 30,
    shots: 1,
    traits: [WeaponTrait.SnapShot]
  }),
  BlastPistol: () => new Pistol("Blast Pistol", "High Tech", {
    range: 8,
    shots: 1,
    damage: 1,
    traits: [WeaponTrait.Pistol]
  }),
  BlastRifle: () => new Weapon("Blast Rifle", "High Tech", {
    range: 16,
    shots: 1,
    damage: 1
  }),
  PlasmaRifle: () => new Weapon("Plasma Rifle", "High Tech", {
    range: 20,
    shots: 2,
    damage: 1,
    traits: [
      WeaponTrait.Focused,
      WeaponTrait.Piercing
    ]
  }),
  GlareSword: () => new Melee("Glare Sword", "High Tech", {
    traits: [
      WeaponTrait.Melee,
      WeaponTrait.Elegant,
      WeaponTrait.Piercing
    ]
  })
}

export const HighTechWeaponList = Datalist(HighTechWeapons);

export const LowTechWeapons = {
  Handgun: () => new Pistol(`Handgun`, `Low Tech`, {
    range: 12,
    shots: 1,
    traits: [WeaponTrait.Pistol]
  }),
  ScrapPistol: () => new Pistol("Scrap Pistol", "Low Tech", {
    range: 9,
    shots: 1,
    traits: [WeaponTrait.Pistol]
  }),
  MachinePistol: () => new Pistol("Machine Pistol", "Low Tech", {
    range: 8,
    shots: 2,
    traits: [
      WeaponTrait.Pistol,
      WeaponTrait.Focused
    ]
  }),
  ColonyRifle: () => new Weapon("Colony Rifle", "Low Tech", {
    range: 18,
    shots: 1
  }),
  Shotgun: () => new Weapon("Shotgun", "Low Tech", {
    range: 12,
    shots: 2,
    damage: 1,
    traits: [WeaponTrait.Focused]
  }),
  HuntingRifle: () => new Weapon("Hunting Rifle", "Low Tech", {
    range: 30,
    shots: 1,
    damage: 1,
    traits: [WeaponTrait.Heavy]
  }),
  Blade: () => new Melee("Blade", "Low Tech", {
    traits: [WeaponTrait.Melee]
  }),
  BrutalMeleeWeapon: () => new Melee("Brutal Melee Weapon", "Low Tech", {
    damage: 1,
    traits: [
      WeaponTrait.Melee,
      WeaponTrait.Clumsy
    ]
  })
}

export const LowTechWeaponList = Datalist(LowTechWeapons);

export const MilitaryWeapons = {
  MilitaryRifle: () => new Weapon("Military Rifle", "Military", {
    range: 24,
    shots: 1
  }),
  InfantryLaser: () => new Weapon("Infantry Laser", "Military", {
    range: 30,
    shots: 1,
    traits: [WeaponTrait.SnapShot]
  }),
  MarksmansRifle: () => new Weapon("Marksman's Rifle", "Military", {
    range: 36,
    shots: 1,
    traits: [WeaponTrait.Heavy]
  }),
  NeedleRifle: () => new Weapon("Needle Rifle", "Military", {
    range: 18,
    shots: 2,
    traits: [WeaponTrait.Critical]
  }),
  AutoRifle: () => new Weapon("Auto Rifle", "Military", {
    range: 24,
    shots: 2
  }),
  RattleGun: () => new Weapon("Rattle Gun", "Military", {
    range: 24,
    shots: 3,
    traits: [WeaponTrait.Heavy]
  }),
  BoardingSaber: () => new Melee("Boarding Saber", "Military", {
    damage: 1,
    traits: [
      WeaponTrait.Melee,
      WeaponTrait.Elegant
    ]
  }),
  ShatterAxe: () => new Melee("Shatter Axe", "Military", {
    damage: 2,
    traits: [WeaponTrait.Melee]
  })
}

export const MilitaryWeaponList = Datalist(MilitaryWeapons);
