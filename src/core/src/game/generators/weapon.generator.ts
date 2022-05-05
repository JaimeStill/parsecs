import { Weapon } from '../models/equipment/weapon';

import {
  d100,
  Generator,
  GeneratorOption
} from '../core';

import {
  HighTechWeapons,
  LowTechWeapons,
  MilitaryWeapons
} from '../data/weapon.data';

export abstract class WeaponGenerator {
  static GenerateHighTech = (): Weapon =>
    Generator(d100, [
      new GeneratorOption(
        [1, 5], HighTechWeapons.DuelingPistol()
      ),
      new GeneratorOption(
        [6, 15], HighTechWeapons.HandCannon()
      ),
      new GeneratorOption(
        [16, 30], HighTechWeapons.HandLaser()
      ),
      new GeneratorOption(
        [31, 45], HighTechWeapons.BeamPistol()
      ),
      new GeneratorOption(
        [46, 55], HighTechWeapons.InfantryLaser()
      ),
      new GeneratorOption(
        [56, 70], HighTechWeapons.BlastPistol()
      ),
      new GeneratorOption(
        [71, 80], HighTechWeapons.BlastRifle()
      ),
      new GeneratorOption(
        [81, 85], HighTechWeapons.PlasmaRifle()
      ),
      new GeneratorOption(
        [86, 100], HighTechWeapons.GlareSword()
      )
    ]);

  static GenerateLowTech = (): Weapon =>
    Generator(d100, [
      new GeneratorOption(
        [1, 15], LowTechWeapons.Handgun()
      ),
      new GeneratorOption(
        [16, 35], LowTechWeapons.ScrapPistol()
      ),
      new GeneratorOption(
        [36, 40], LowTechWeapons.MachinePistol()
      ),
      new GeneratorOption(
        [41, 65], LowTechWeapons.ColonyRifle()
      ),
      new GeneratorOption(
        [66, 75], LowTechWeapons.Shotgun()
      ),
      new GeneratorOption(
        [76, 80], LowTechWeapons.HuntingRifle()
      ),
      new GeneratorOption(
        [81, 95], LowTechWeapons.Blade()
      ),
      new GeneratorOption(
        [96, 100], LowTechWeapons.BrutalMeleeWeapon()
      )
    ]);

  static GenerateMilitary = (): Weapon =>
    Generator(d100, [
      new GeneratorOption(
        [1, 25], MilitaryWeapons.MilitaryRifle()
      ),
      new GeneratorOption(
        [26, 45], MilitaryWeapons.InfantryLaser()
      ),
      new GeneratorOption(
        [46, 50], MilitaryWeapons.MarksmansRifle()
      ),
      new GeneratorOption(
        [51, 60], MilitaryWeapons.NeedleRifle()
      ),
      new GeneratorOption(
        [61, 75], MilitaryWeapons.AutoRifle()
      ),
      new GeneratorOption(
        [76, 80], MilitaryWeapons.RattleGun()
      ),
      new GeneratorOption(
        [81, 95], MilitaryWeapons.BoardingSaber()
      ),
      new GeneratorOption(
        [96, 100], MilitaryWeapons.ShatterAxe()
      )
    ]);
}
