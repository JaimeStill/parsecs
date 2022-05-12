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
  campaign!: Campaign;
  cardSize: number | string = 'auto';
  store: StoreManager<Campaign> = new StoreManager('parsecs', Campaign.Restore);
  data!: Campaign[];

  ngOnInit() {
    this.initCampaign();
    this.data = this.store.getAll();
    console.log('saved campaigns', this.data);
    console.log('campaign is saved', this.store.exists(this.campaign.name));
  }

  initCampaign = () => {
    const c = new CampaignConfig(this.name);
    for (var i = 0; i < c.crew.roster.length; i++)
      c.crew.roster[i].name = `Character ${i}`;

    c.leader = c.crew.roster[0];
    c.victory = c.victoryConditions[0].value;

    this.campaign = c.finalize();
  }

  saveCampaign = () => {
    this.campaign.name = this.name;
    this.store.save(this.campaign.name, this.campaign);
    this.data = this.store.getAll();
  }

  uploadSaves = (files: FileList) => {
    if (files.length > 0) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.store.upload(e.target.result);
        this.data = this.store.getAll();
      }

      reader.readAsText(files[0]);
    }
  }
}
