import {
  Component,
  OnInit
} from '@angular/core';

import {
  d6,
  Character,
  CharacterGenerator,
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
  ship!: Ship;
  weapon!: Weapon;

  cardSize: number | string = 'auto';

  ngOnInit() {
    this.generateCharacter();
    this.generateShip();
    this.generateWeapon();
  }

  characterColor = () => {
    switch (this.character?.species) {
      case 'Human':
        return 'color-blue';
      case 'Alien':
        return 'color-green';
      case 'Strange':
        return 'color-red';
      default:
        return 'color-amber';
    }
  }

  generateCharacter = () => this.character = CharacterGenerator.GenerateCharacter();

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
