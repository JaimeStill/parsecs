import {
  Component,
  OnInit
} from '@angular/core';

import {
  d6,
  Campaign,
  CampaignConfig,
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
  campaign!: Campaign;
  cardSize: number | string = 'auto';

  ngOnInit() {
    this.initCampaign();
  }

  initCampaign = () => {
    const c = new CampaignConfig('test-campaign');
    for (var i = 0; i < c.crew.roster.length; i++)
      c.crew.roster[i].name = `Character ${i}`;
      
    c.victory = c.victoryConditions[0].value;

    this.campaign = c.finalize();
  }
}
