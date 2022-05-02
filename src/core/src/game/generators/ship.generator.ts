import { Ships } from '../data';
import { Ship } from '../models';

import {
  d100,
  Generator,
  GeneratorOption
} from '../core';

export abstract class ShipGenerator {
  static Generate = (): Ship =>
    Generator(d100, [
      new GeneratorOption(
        [1, 12], Ships.WornFreighter()
      ),
      new GeneratorOption(
        [13, 18], Ships.RetiredTroopTransport()
      ),
      new GeneratorOption(
        [19, 23], Ships.StrangeAlienVessel()
      ),
      new GeneratorOption(
        [24, 31], Ships.UpgradedShuttle()
      ),
      new GeneratorOption(
        [32, 38], Ships.RetiredScoutShip()
      ),
      new GeneratorOption(
        [39, 45], Ships.RepurposedScienceVessel()
      ),
      new GeneratorOption(
        [46, 56], Ships.BatteredMiningShip()
      ),
      new GeneratorOption(
        [57, 65], Ships.UnreliableMerchantCruiser()
      ),
      new GeneratorOption(
        [66, 70], Ships.FormerDiplomaticVessel()
      ),
      new GeneratorOption(
        [71, 76], Ships.AncientLowTechCraft()
      ),
      new GeneratorOption(
        [77, 84], Ships.BuiltFromSalvagedWrecks()
      ),
      new GeneratorOption(
        [85, 95], Ships.WornColonyShip()
      ),
      new GeneratorOption(
        [96, 100], Ships.RetiredMilitaryPatrolShip()
      )
    ]);
}
