export enum CharacterStat {
  CombatSkill = "Combat Skill",
  Luck = "Luck",
  Reactions = "Reactions",
  Savvy = "Savvy",
  Speed = "Speed",
  Toughness = "Toughness",
  XP = "XP"
}

export enum Difficulty {
  Easy = "Easy",
  Normal = "Normal",
  Challenging = "Challenging",
  Hardcore = "Hardcore",
  Insanity = "Insanity"
}

export enum ProtectiveDeviceType {
  Armor = `Armor`,
  Screen = `Screen`
}

export enum ShipTrait {
  EmergencyDrives = `If you have to perform an emergency take-off while your ship is damaged, reduce the Hull damage sustained on the roll by 3.`,
  FuelEfficient = `When traveling to a new world, the fuel cost is reduced by 1 credit.`,
  FuelHog = `When traveling to a new world, the fuel cost is increased by 1 credit.`,
  DodgyDrive = `Any time the ship takes Hull damage, roll 2D6. If the roll is equal to or below the amount of damage sustained, the drive is misbehaving, and 2 additional points of damage are sustained.`,
  StandardIssue = `The cost of all Starship Components is reduced by 1 credit.`,
  Armored = `Any time the ship takes damage, you lose 1 Hull Point less than indicated by the rules.`
}

export enum WeaponStat {
  Range = "Range",
  Shots = "Shots",
  Damage = "Damage",
  Hit = "Hit"
}

export enum WeaponTrait {
  Area = `Resolve all shots against the initial target. They cannot be spread. Then resolve one bonus shot against every figure within 2".`,
  Clumsy = `-1 to Brawling rolls, if opponent has higher Speed.`,
  Critical = `A natural 6 on the to Hit roll will inflict 2 Hits on the target.`,
  Elegant = `When Brawling, the fighter may reroll the die. Enemies will always reroll if they have a lower total than their opponent, and can improve the result.`,
  Focused = `All shots must be against a single target.`,
  Heavy = `-1 penalty to Hit if the firer moved this round.`,
  Impact = `If target is Stunned, place a second Stun marker.`,
  Melee = `+2 to Brawling rolls.`,
  Piercing = `Ignore Armor Saving Throws.`,
  Pistol = `+1 to Brawling rolls.`,
  SingleUse = `The item can be used only once and must be deducted from the available supply. The Panic Fire rule cannot be used with Single Use weapons.`,
  SnapShot = `+1 to Hit within 6".`,
  Stun = `All targets are automatically Stunned. No damage rolls ake place.`,
  Terrifying = `Any target hit must retreat 1D6" away from the firer.`
}
