import {
  Component,
  OnInit
} from '@angular/core';

import {
  d6,
  Character,
  CharacterGenerator,
  CharacterRace,
  Equipment,
  EquipmentGenerator,
  Ship,
  ShipGenerator,
  Weapon,
  WeaponGenerator
} from 'core';

@Component({
  selector: 'home-route',
  templateUrl: 'home.route.html'
})
export class HomeRoute implements OnInit {
  character!: Character;
  gadget!: Equipment;
  ship!: Ship;
  weapon!: Weapon;

  cardSize: number | string = 'auto';

  ngOnInit() {
    this.generateCharacter();
    this.generateGadget();
    this.generateShip();
    this.generateWeapon();
  }

  characterColor = () => {
    switch (this.character?.race) {
      case CharacterRace.Human:
        return 'color-blue';
      case CharacterRace.Alien:
        return 'color-green';
      case CharacterRace.Bot:
        return 'color-amber';
      default:
        return 'color-red';
    }
  }

  generateCharacter = () => this.character = CharacterGenerator.GenerateCharacter();

  generateGadget = () => this.gadget = EquipmentGenerator.GenerateGadget();

  generateWeapon = () => {
    const roll = d6();

    if (roll >= 1 && roll <= 2)
      this.weapon = WeaponGenerator.GenerateLowTech();
    if (roll >= 3 && roll <= 4)
      this.weapon = WeaponGenerator.GenerateMilitary();
    else
      this.weapon = WeaponGenerator.GenerateHighTech();
  }

  weaponColor = () => {
    switch (this.weapon?.description) {
      case 'Low Tech':
        return 'color-blue';
      case 'Military':
        return 'color-green';
      case 'High Tech':
        return 'color-amber';
      default:
        return 'color-red';
    }
  }

  generateShip = () => this.ship = ShipGenerator.Generate();
}
