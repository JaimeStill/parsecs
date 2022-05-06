import { CharacterEffect } from './character-effect';
import { CampaignResource } from '../campaign/campaign-resource';

import {
  Equipment,
  Weapon
} from '../equipment';

interface CharacterDetailConfig {
  effects: CharacterEffect[] | null,
  resources: CampaignResource,
  equipment: (Weapon | Equipment)[] | null
}

export class CharacterDetail {
  detail: string;
  effects: CharacterEffect[] | null;
  resources: CampaignResource = new CampaignResource();
  equipment: (Weapon | Equipment)[] | null = null;

  constructor(
    detail: string,
    {
      effects = null,
      resources = new CampaignResource(),
      equipment = null
    }: Partial<CharacterDetailConfig> = {}
  ) {
    this.detail = detail;
    this.effects = effects;
    this.resources = resources;
    this.equipment = equipment;
  }

  private mergeEffects = (cd: CharacterDetail) => {
    if (this.effects && cd.effects)
      this.effects.push(...cd.effects);
    else if (cd.effects)
      this.effects = cd.effects;
  }

  private mergeEquipment = (cd: CharacterDetail) => {
    if (this.equipment && cd.equipment)
      this.equipment.push(...cd.equipment);
    else if (cd.equipment)
      this.equipment = cd.equipment;
  }

  merge = (cd: CharacterDetail) => {
    this.detail = `${this.detail} : ${cd.detail}`;
    this.mergeEffects(cd);
    this.resources.consolidate([cd.resources]);
    this.mergeEquipment(cd);
  }
}
