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
    if (this.resources && cd.resources) {
      if (this.resources.credits && cd.resources.credits)
        this.resources.credits += cd.resources.credits;
      else if (cd.resources.credits)
        this.resources.credits = cd.resources.credits;

      if (this.resources.patrons && cd.resources.patrons)
        this.resources.patrons += cd.resources.patrons;
      else if (cd.resources.patrons)
        this.resources.patrons = cd.resources.patrons;

      if (this.resources.rivals && cd.resources.rivals)
        this.resources.rivals += cd.resources.rivals;
      else if (cd.resources.rivals)
        this.resources.rivals = cd.resources.rivals;

      if (this.resources.rumors && cd.resources.rumors)
        this.resources.rumors += cd.resources.rumors;
      else if (cd.resources.rumors)
        this.resources.rumors = cd.resources.rumors;

      if (this.resources.storyPoints && cd.resources.storyPoints)
        this.resources.storyPoints += cd.resources.storyPoints;
      else if (cd.resources.storyPoints)
        this.resources.storyPoints = cd.resources.storyPoints;
    } else if (cd.resources)
      this.resources = cd.resources;
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
