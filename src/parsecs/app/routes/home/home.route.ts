import {
  Component,
  OnInit
} from '@angular/core';

import {
  d6,
  Character,
  CharacterGenerator,
  Race,
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
  character!: Character<Race>;
  ship!: Ship;
  weapon!: Weapon;

  cardSize: number | string = 'auto';

  ngOnInit() {
    this.generateCharacter();
    this.generateShip();
    this.generateWeapon();
  }

  characterColor = () => {
    switch (this.character?.race?.species) {
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

  generateCharacter = () => this.character = CharacterGenerator.Generate();

  generateWeapon = () => {
    const roll = d6();

    if (roll >= 1 && roll <= 2)
      this.weapon = WeaponGenerator.LowTech();
    if (roll >= 3 && roll <= 4)
      this.weapon = WeaponGenerator.Military();
    else
      this.weapon = WeaponGenerator.HighTech();
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
