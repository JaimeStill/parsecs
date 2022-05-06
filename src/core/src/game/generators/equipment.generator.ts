import { WeaponGenerator } from './weapon.generator';

import {
  d100,
  Generator,
  GeneratorOption
} from '../core';

import {
  Consumables,
  Implants,
  OnBoardItems,
  ProtectiveDevices,
  UtilityDevices,
  WeaponMods,
  WeaponSights
} from '../data/equipment.data';

import {
  Equipment,
  Weapon
} from '../models/equipment';

export abstract class EquipmentGenerator {
  static GenerateStash = (savvyUpgrades: number = 0): (Weapon | Equipment)[] => {
    const stash = new Array<Weapon | Equipment>();

    for (let i = 0; i < 3; i++) {
      stash.push(
        savvyUpgrades > i
          ? WeaponGenerator.GenerateHighTech()
          : WeaponGenerator.GenerateMilitary()
      );

      stash.push(WeaponGenerator.GenerateLowTech());
    }

    stash.push(this.GenerateGear());
    stash.push(this.GenerateGadget());

    return stash;
  }

  static GenerateGear = (): Equipment =>
    Generator(d100, [
      new GeneratorOption(
        [1, 4], WeaponMods.AssaultBlade()
      ),
      new GeneratorOption(
        [5, 10], WeaponMods.BeamLight()
      ),
      new GeneratorOption(
        [11, 15], WeaponMods.Bipod()
      ),
      new GeneratorOption(
        [16, 20], Consumables.BoosterPills()
      ),
      new GeneratorOption(
        [21, 24], ProtectiveDevices.CamoCloak()
      ),
      new GeneratorOption(
        [25, 28], ProtectiveDevices.CombatArmor()
      ),
      new GeneratorOption(
        [29, 33], UtilityDevices.Communicator()
      ),
      new GeneratorOption(
        [34, 37], UtilityDevices.ConcealedBlade()
      ),
      new GeneratorOption(
        [38, 42], OnBoardItems.FakeId()
      ),
      new GeneratorOption(
        [43, 46], OnBoardItems.Fixer()
      ),
      new GeneratorOption(
        [47, 52], ProtectiveDevices.FragVest()
      ),
      new GeneratorOption(
        [53, 57], UtilityDevices.GrappleLauncher()
      ),
      new GeneratorOption(
        [58, 61], UtilityDevices.HazardSuit()
      ),
      new GeneratorOption(
        [62, 65], WeaponSights.LaserSight()
      ),
      new GeneratorOption(
        [66, 69], OnBoardItems.LoadedDice()
      ),
      new GeneratorOption(
        [70, 75], OnBoardItems.MedPatch()
      ),
      new GeneratorOption(
        [76, 81], OnBoardItems.NanoDoc()
      ),
      new GeneratorOption(
        [82, 85], OnBoardItems.Purifier()
      ),
      new GeneratorOption(
        [86, 89], UtilityDevices.ScannerBot()
      ),
      new GeneratorOption(
        [90, 92], OnBoardItems.SectorPermit()
      ),
      new GeneratorOption(
        [93, 96], UtilityDevices.SteelBoots()
      ),
      new GeneratorOption(
        [97, 100], WeaponSights.TrackerSight()
      )
    ]);

  static GenerateGadget = (): Equipment =>
    Generator(d100, [
      new GeneratorOption(
        [1, 4], Implants.AICompanion()
      ),
      new GeneratorOption(
        [5, 9], OnBoardItems.Analyzer()
      ),
      new GeneratorOption(
        [10, 13], UtilityDevices.BattleVisor()
      ),
      new GeneratorOption(
        [14, 17], Implants.BoostedArm()
      ),
      new GeneratorOption(
        [18, 21], Implants.BoostedLeg()
      ),
      new GeneratorOption(
        [22, 24], Implants.CyberHand()
      ),
      new GeneratorOption(
        [25, 27], UtilityDevices.Displacer()
      ),
      new GeneratorOption(
        [28, 31], UtilityDevices.DistractionBot()
      ),
      new GeneratorOption(
        [32, 36], OnBoardItems.Duplicator()
      ),
      new GeneratorOption(
        [37, 41], UtilityDevices.InstaWall()
      ),
      new GeneratorOption(
        [42, 46], UtilityDevices.JumpBelt()
      ),
      new GeneratorOption(
        [47, 50], Implants.NerveAdjuster()
      ),
      new GeneratorOption(
        [51, 55], OnBoardItems.RepairBot()
      ),
      new GeneratorOption(
        [56, 60], UtilityDevices.ScannerBot()
      ),
      new GeneratorOption(
        [61, 65], ProtectiveDevices.ScreenGenerator()
      ),
      new GeneratorOption(
        [66, 69], WeaponSights.SeekerSight()
      ),
      new GeneratorOption(
        [70, 73], WeaponMods.ShockAttachment()
      ),
      new GeneratorOption(
        [74, 79], UtilityDevices.SnooperBot()
      ),
      new GeneratorOption(
        [80, 83], UtilityDevices.SonicEmitter()
      ),
      new GeneratorOption(
        [84, 89], WeaponMods.Stabilizer()
      ),
      new GeneratorOption(
        [90, 93], ProtectiveDevices.StealthGear()
      ),
      new GeneratorOption(
        [94, 100], Consumables.StimPack()
      )
    ])
}
