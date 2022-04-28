import {
  Race,
  RaceConfig
} from './race';

export class Bot extends Race {
  constructor(
    type: string = 'Base',
    config: Partial<RaceConfig> = {
      reaction: 2,
      combatSkill: 1,
      toughness: 4,
      savvy: 2
    }
  ) {
    super('Bot', type, config);
  }
}

export class AssaultBot extends Bot {
  constructor() {
    super('Assault Bot');
  }
}
