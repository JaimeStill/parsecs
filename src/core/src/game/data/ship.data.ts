import { ShipTrait } from '../enums';
import { Ship } from '../models';

import {
  d6,
  Datalist
} from '../core';

export const Ships = {
  WornFreighter: () => new Ship("Worn freighter", d6() + 20, 30),
  RetiredTroopTransport: () => new Ship("Retired troop transport", d6() + 30, 35),
  StrangeAlienVessel: () => new Ship("Strange alien vessel", d6() + 15, 25),
  UpgradedShuttle: () => new Ship("Upgraded shuttle", d6() + 10, 20),
  RetiredScoutShip: () => new Ship("Retired scout ship", d6() + 20, 25, ShipTrait.FuelEfficient),
  RepurposedScienceVessel: () => new Ship("Repurposed science vessel", d6() + 10, 20),
  BatteredMiningShip: () => new Ship("Battered mining ship", d6() + 20, 35, ShipTrait.FuelHog),
  UnreliableMerchantCruiser: () => new Ship("Unreliable merchant cruiser", d6() + 20, 30),
  FormerDiplomaticVessel: () => new Ship("Former diplomatic vessel", d6() + 15, 25),
  AncientLowTechCraft: () => new Ship("Ancient low-tech craft", d6() + 20, 35, ShipTrait.DodgyDrive),
  BuiltFromSalvagedWrecks: () => new Ship("Built from salvaged wrecks", d6() + 20, 30),
  WornColonyShip: () => new Ship("Worn colony ship", d6() + 20, 25, ShipTrait.StandardIssue),
  RetiredMilitaryPatrolShip: () => new Ship("Retired military patrol ship", d6() + 35, 40, ShipTrait.Armored)
}

export const ShipList = Datalist(Ships);
