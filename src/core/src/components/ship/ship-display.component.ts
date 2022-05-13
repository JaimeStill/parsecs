import {
  Component,
  Input
} from '@angular/core';

import { Ship } from '../../game';

@Component({
  selector: 'ship-display',
  templateUrl: 'ship-display.component.html'
})
export class ShipDisplayComponent {
  @Input() ship!: Ship;
  @Input() size: number = 408;
  @Input() cardStyle: string = 'rounded card-outline-accent background-card p4';

  trait = () => this.ship.trait
    ? this.ship.trait.split(':')[0]
    : `No Trait`;
}
