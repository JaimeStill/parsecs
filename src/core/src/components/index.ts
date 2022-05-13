import { CampaignComponents } from './campaign';
import { CharacterComponents } from './character';
import { CoreComponents } from './core';
import { ShipComponents } from './ship';

export const Components = [
  ...CampaignComponents,
  ...CharacterComponents,
  ...CoreComponents,
  ...ShipComponents
];

export * from './campaign';
export * from './character';
export * from './core';
export * from './ship';
