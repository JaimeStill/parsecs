import {
  Race,
  RaceConfig
} from './race';

export class Human extends Race {
  constructor(
    type: string = 'Base',
    config?: Partial<RaceConfig>
  ) {
    super('Human', type, config);
  }

  override set luck(value: number) {
    this._luck = value;
  }
}

export class MysteriousPast extends Human {
  constructor() {
    super('Mysterious Past');
  }
}

export class HopefulRookie extends Human {
  constructor() {
    super('Hopeful Rookie', {
      luck: 1
    })
  }
}

export class Mutant extends Human {
  constructor() {
    super('Mutant');
  }
}

export class Primitive extends Human {
  constructor() {
    super('Primitive');
  }
}

export class Feeler extends Human {
  constructor() {
    super('Feeler');
  }
}

export class EmoSuppressed extends Human {
  constructor() {
    super('Emo-suppressed');
  }

  override set luck(value: number) {
    this._luck = 0;
  }
}

export class MinorAlien extends Human {
  constructor() {
    super('Minor Alien');
  }
}

export class Empath extends Human {
  constructor() {
    super('Empath');
  }
}

export class BioUpgrade extends Human {
  constructor() {
    super('Bio-upgrade');
  }
}
