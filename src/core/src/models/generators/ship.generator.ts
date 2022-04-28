import { ShipTrait } from '../enums';
import { Ship } from '../ship';

import {
  d6,
  d100
} from '../dice';

export abstract class ShipGenerator {
  static Generate = (): Ship => {
    const roll = d100();

    if (roll >= 1 && roll <= 12)
      return new Ship("Worn freighter", d6() + 20, 30);
    else if (roll >= 13 && roll <= 18)
      return new Ship("Retired troop transport", d6() + 30, 35);
    else if (roll >= 19 && roll <= 23)
      return new Ship("Strange alien vessel", d6() + 15, 25);
    else if (roll >= 24 && roll <= 31)
      return new Ship("Upgraded shuttle", d6() + 10, 20);
    else if (roll >= 32 && roll <= 38)
      return new Ship("Retired scout ship", d6() + 20, 25, ShipTrait.FuelEfficient);
    else if (roll >= 39 && roll <= 45)
      return new Ship("Repurposed science vessel", d6() + 10, 20);
    else if (roll >= 46 && roll <= 56)
      return new Ship("Battered mining ship", d6() + 20, 35, ShipTrait.FuelHog);
    else if (roll >= 57 && roll <= 65)
      return new Ship("Unreliable merchant cruiser", d6() + 20, 30);
    else if (roll >= 66 && roll <= 70)
      return new Ship("Former diplomatic vessel", d6() + 15, 25);
    else if (roll >= 71 && roll <= 76)
      return new Ship("Ancient low-tech craft", d6() + 20, 35, ShipTrait.DodgyDrive);
    else if (roll >= 77 && roll <= 84)
      return new Ship("Built from salvaged wrecks", d6() + 20, 30);
    else if (roll >= 85 && roll <= 95)
      return new Ship("Worn colony ship", d6() + 20, 25, ShipTrait.StandardIssue);
    else
      return new Ship("Retired military patrol ship", d6() + 35, 40, ShipTrait.Armored);
  }
}
