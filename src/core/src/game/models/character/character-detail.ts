import { CharacterEffect } from './character-effect';
import { CharacterResource } from './character-resource';

import {
  Equipment,
  Weapon
} from '../equipment';

interface CharacterDetailConfig {
  effects: CharacterEffect[] | null,
  resources: Partial<CharacterResource> | null,
  equipment: Weapon | Equipment | null
}

export class CharacterDetail {
  detail: string;
  effects: CharacterEffect[] | null;
  resources: Partial<CharacterResource> | null;
  equipment: Weapon | Equipment | null;

  constructor(
    detail: string,
    {
      effects = null,
      resources = null,
      equipment = null
    }: Partial<CharacterDetailConfig> = {}
  ) {
    this.detail = detail;
    this.effects = effects;
    this.resources = resources;
    this.equipment = equipment;
  }
}
