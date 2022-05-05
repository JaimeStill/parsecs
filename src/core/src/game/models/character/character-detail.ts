import { CharacterEffect } from './character-effect';
import { CrewResource } from '../crew';

import {
  Equipment,
  Weapon
} from '../equipment';

interface CharacterDetailConfig {
  effects: CharacterEffect[] | null,
  resources: Partial<CrewResource> | null,
  equipment: (Weapon | Equipment)[] | null
}

export class CharacterDetail {
  detail: string;
  effects: CharacterEffect[] | null;
  resources: Partial<CrewResource> | null;
  equipment: (Weapon | Equipment)[] | null = null;

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

  private mergeEffects = (cd: CharacterDetail) => {
    if (this.effects && cd.effects)
      this.effects.push(...cd.effects);
    else if (cd.effects)
      this.effects = cd.effects;
  }

  private mergeResources = (cd: CharacterDetail) => {
    this.resources = Object.assign({} as CrewResource, this.resources);
    cd.resources = Object.assign({} as CrewResource, remote.resources);

    this.resources.credits = (this.resources.credits ?? 0) + (cd.resources.credits ?? 0);
    this.resources.patrons = (this.resources.patrons ?? 0) + (cd.resources.patrons ?? 0);
    this.resources.rivals = (this.resources.rivals ?? 0) + (cd.resources.rivals ?? 0);
    this.resources.rumors = (this.resources.rumors ?? 0) + (cd.resources.rumors ?? 0);
    this.resources.storyPoints = (this.resources.storyPoints ?? 0) + (cd.resources.storyPoints ?? 0);
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
    this.mergeResources(cd);
    this.mergeEquipment(cd);
  }

  finalResources = () =>
    Object.assign(
      {
        credits: 0,
        patrons: 0,
        rivals: 0,
        rumors: 0,
        storyPoints: 0
      } as CrewResource,
      this.resources
    ) as CrewResource
}
