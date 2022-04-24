import {
  Race,
  RaceConfig
} from './race';

export abstract class Strange extends Race {
  constructor(
    kind: string,
    config?: Partial<RaceConfig>
  ) {
    super('Strange', kind, config);
  }
}

export class DeConverted extends Strange {
  constructor() {
    super('De-converted');
  }

  override set savvy(value: number) {
    this._savvy = 0;
  }
}

export class UnityAgent extends Strange {
  constructor() {
    super('Unity Agent', {
      reaction: 2
    });
  }
}

export class Stalker extends Strange {
  constructor() {
    super('Stalker');
  }
}

export class Hulker extends Strange {
  constructor() {
    super('Hulker', {
      combatSkill: 1,
      toughness: 5
    });
  }
}

export class GeneticUplift extends Strange {
  constructor() {
    super('Genetic Uplift', {
      reaction: 2,
      speed: 5,
      combatSkill: 1,
      toughness: 4,
      savvy: 1
    });
  }
}

export class Traveler extends Strange {
  constructor() {
    super('Traveler', {
      reaction: 3,
      toughness: 4,
      savvy: 2
    });
  }
}
