import {
  Race,
  RaceConfig
} from './race';

export abstract class Alien extends Race {
  readonly species: string;

  constructor(
    species: string,
    config?: Partial<RaceConfig>
  ) {
    super('Alien', config);
    this.species = species;
  }

  override get kind(): string {
    return this.species;
  }
}

export class Engineer extends Alien {
  constructor() {
    super('Engineer', {
      toughness: 2,
      savvy: 1
    });
  }

  override set toughness(value: number) {
    this._toughness = value > 4
      ? 4
      : value;
  }
}

export class KErin extends Alien {
  constructor() {
    super(`K'Erin`, {
      toughness: 4
    });
  }
}

export class Soulless extends Alien {
  constructor() {
    super('Soulless', {
      toughness: 4,
      savvy: 1
    });
  }
}

export class Precursor extends Alien {
  constructor() {
    super('Precursor', {
      speed: 5,
      toughness: 2
    });
  }
}

export class Swift extends Alien {
  constructor() {
    super('Swift', {
      speed: 5
    });
  }
}

export class Feral extends Alien {
  constructor() {
    super('Feral');
  }
}

export class Hakshan extends Alien {
  constructor() {
    super('Hakshan');
  }
}

export class Manipulator extends Alien {
  constructor() {
    super('Manipulator', {
      reaction: 2,
      savvy: 1
    });
  }
}
