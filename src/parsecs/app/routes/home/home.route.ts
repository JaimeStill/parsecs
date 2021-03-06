import {
  Component,
  OnInit
} from '@angular/core';

import {
  Campaign,
  CampaignConfig,
  StoreManager
} from 'core';

@Component({
  selector: 'home-route',
  templateUrl: 'home.route.html'
})
export class HomeRoute implements OnInit {
  name: string = 'Onyx Dawn';
  cardSize: number | string = 'auto';
  store: StoreManager<Campaign> = new StoreManager('parsecs', Campaign.Restore);

  ngOnInit() {
    this.initCampaign();
  }

  initCampaign = () => {
    const c = new CampaignConfig(this.name);
    for (var i = 0; i < c.crew.roster.length; i++)
      c.crew.roster[i].name = `Character ${i}`;

    c.leader = c.crew.roster[0];
    c.victory = c.victoryConditions[0].value;

    const campaign = c.finalize();
    this.store.save(campaign.name, campaign);
  }

  uploadSaves = (files: FileList) => {
    if (files.length > 0) {
      const reader = new FileReader();

      reader.onload = (e: any) =>
        this.store.upload(e.target.result);

      reader.readAsText(files[0]);
    }
  }
}
