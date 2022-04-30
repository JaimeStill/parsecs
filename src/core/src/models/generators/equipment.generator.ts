import { d100 } from '../dice';
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
  Equipment,
  Implant,
  OnBoardItem,
} from '../equipment';

import {
  Generator,
  GeneratorOption
} from './generator';

export abstract class EquipmentGenerator {
  static GenerateGear = (): Equipment =>
    Generator(d100, this.GearTable);

  static GenerateGadget = (): Equipment => {
    return new Implant(`some`, `implant`);
  }

  static GearTable = new Array<GeneratorOption<Equipment>>(
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
  );
}
