import {
  Component,
  OnInit
} from '@angular/core';

import {
  Character,
  CharacterService,
  Race
} from 'core';

@Component({
  selector: 'home-route',
  templateUrl: 'home.route.html'
})
export class HomeRoute implements OnInit {
  character!: Character<Race>;

  constructor(
    private characterSvc: CharacterService
  ) { }

  ngOnInit() {
    this.generate();
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

  generate = () => this.character = this.characterSvc.generate();
}
