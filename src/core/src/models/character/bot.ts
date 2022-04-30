import {
  Character,
  CharacterConfig
} from './character';

export class Bot extends Character {
  constructor(
    type: string = 'Base',
    config: Partial<CharacterConfig> = {
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
