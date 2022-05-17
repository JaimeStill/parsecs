import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  CampaignConfig,
  Difficulty
} from '../../game';

@Component({
  selector: 'campaign-builder',
  templateUrl: 'campaign-builder.component.html'
})
export class CampaignBuilder {
  difficulties = Object.keys(Difficulty);
  config: CampaignConfig = new CampaignConfig('');

  selectDifficulty = (d: Difficulty) => console.log(d);

  constructor() {
    console.log(this.config);
  }
}
