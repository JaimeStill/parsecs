import {
  Component,
  Input
} from '@angular/core';

import { Character } from '../../game';

@Component({
  selector: 'character-display',
  templateUrl: 'character-display.component.html'
})
export class CharacterDisplayComponent {
  @Input() character!: Character;
  @Input() size: number = 408;
  @Input() cardStyle: string = 'rounded card-outline-accent background-card p4';

  race = () => `${this.character.race} - ${this.character.species}`;
}
