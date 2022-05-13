import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Campaign } from '../../game';

@Component({
  selector: 'campaign-card',
  templateUrl: 'campaign-card.component.html'
})
export class CampaignCardComponent {
  @Input() campaign!: Campaign;
  @Input() size: number = 420;
  @Input() cardStyle: string = 'background-card card-outline-accent rounded';

  @Output() remove = new EventEmitter<Campaign>();
  @Output() select = new EventEmitter<Campaign>();

  showShip: boolean = false;
  showCrew: boolean = false;

  victory = () => this.campaign.victory
    ? `${this.campaign.victory.iterations} - ${this.campaign.victory.type}`
    : `No Victory Condition Set`;

  storyPoints = () => this.campaign.useStory
    ? `${this.campaign.resources.storyPoints}`
    : `Story Not Enabled`;

  toggleShip = () => this.showShip = !this.showShip;
}
