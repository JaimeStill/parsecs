import { d100 } from '../dice';
import { Equipment } from '../equipment';
import { Clone } from '../functions';

import {
  Consumables,
  Implants,
  OnBoardItems,
  ProtectiveDevices,
  UtilityDevices,
  WeaponMods,
  WeaponSights
} from '../data';

import {
  Generator,
  GeneratorOption
} from './generator';

export abstract class EquipmentGenerator {
  static GenerateGear = (): Equipment =>
    Generator(d100, [
      new GeneratorOption(
        [1, 4], Clone(WeaponMods.AssaultBlade)
      ),
      new GeneratorOption(
        [5, 10], Clone(WeaponMods.BeamLight)
      ),
      new GeneratorOption(
        [11, 15], Clone(WeaponMods.Bipod)
      ),
      new GeneratorOption(
        [16, 20], Clone(Consumables.BoosterPills)
      ),
      new GeneratorOption(
        [21, 24], Clone(ProtectiveDevices.CamoCloak)
      ),
      new GeneratorOption(
        [25, 28], Clone(ProtectiveDevices.CombatArmor)
      ),
      new GeneratorOption(
        [29, 33], Clone(UtilityDevices.Communicator)
      ),
      new GeneratorOption(
        [34, 37], Clone(UtilityDevices.ConcealedBlade)
      ),
      new GeneratorOption(
        [38, 42], Clone(OnBoardItems.FakeId)
      ),
      new GeneratorOption(
        [43, 46], Clone(OnBoardItems.Fixer)
      ),
      new GeneratorOption(
        [47, 52], Clone(ProtectiveDevices.FragVest)
      ),
      new GeneratorOption(
        [53, 57], Clone(UtilityDevices.GrappleLauncher)
      ),
      new GeneratorOption(
        [58, 61], Clone(UtilityDevices.HazardSuit)
      ),
      new GeneratorOption(
        [62, 65], Clone(WeaponSights.LaserSight)
      ),
      new GeneratorOption(
        [66, 69], Clone(OnBoardItems.LoadedDice)
      ),
      new GeneratorOption(
        [70, 75], Clone(OnBoardItems.MedPatch)
      ),
      new GeneratorOption(
        [76, 81], Clone(OnBoardItems.NanoDoc)
      ),
      new GeneratorOption(
        [82, 85], Clone(OnBoardItems.Purifier)
      )
    ]);

  static GenerateGadget = (): Equipment =>
    Generator(d100, [
      new GeneratorOption(
        [1, 4], Clone(Implants.AICompanion)
      ),
      new GeneratorOption(
        [5, 9], Clone(OnBoardItems.Analyzer)
      ),
      new GeneratorOption(
        [10, 13], Clone(UtilityDevices.BattleVisor)
      ),
      new GeneratorOption(
        [14, 17], Clone(Implants.BoostedArm)
      ),
      new GeneratorOption(
        [18, 21], Clone(Implants.BoostedLeg)
      ),
      new GeneratorOption(
        [22, 24], Clone(Implants.CyberHand)
      ),
      new GeneratorOption(
        [25, 27], Clone(UtilityDevices.Displacer)
      ),
      new GeneratorOption(
        [28, 31], Clone(UtilityDevices.DistractionBot)
      ),
      new GeneratorOption(
        [32, 36], Clone(OnBoardItems.Duplicator)
      ),
      new GeneratorOption(
        [37, 41], Clone(UtilityDevices.InstaWall)
      ),
      new GeneratorOption(
        [42, 46], Clone(UtilityDevices.JumpBelt)
      ),
      new GeneratorOption(
        [47, 50], Clone(Implants.NerveAdjuster)
      ),
      new GeneratorOption(
        [51, 55], Clone(OnBoardItems.RepairBot)
      ),
      new GeneratorOption(
        [56, 60], Clone(UtilityDevices.ScannerBot)
      ),
      new GeneratorOption(
        [61, 65], Clone(ProtectiveDevices.ScreenGenerator)
      ),
      new GeneratorOption(
        [66, 69], Clone(WeaponSights.SeekerSight)
      ),
      new GeneratorOption(
        [70, 73], Clone(WeaponMods.ShockAttachment)
      ),
      new GeneratorOption(
        [74, 79], Clone(UtilityDevices.SnooperBot)
      ),
      new GeneratorOption(
        [80, 83], Clone(UtilityDevices.SonicEmitter)
      ),
      new GeneratorOption(
        [84, 89], Clone(WeaponMods.Stabilizer)
      ),
      new GeneratorOption(
        [90, 93], Clone(ProtectiveDevices.StealthGear)
      ),
      new GeneratorOption(
        [94, 100], Clone(Consumables.StimPack)
      )
    ])
}
