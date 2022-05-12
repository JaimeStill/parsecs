export enum CharacterRace {
  Alien = "Alien",
  Bot = "Bot",
  Human = "Human",
  Strange = "Strange"
}

export enum CharacterSpecies {
  AssaultBot = "Assault Bot",
  BioUpgrade = "Bio-upgrade",
  Bot = "Bot",
  DeConverted = "De-converted",
  EmoSuppressed = "Emo-suppressed",
  Empath = "Empath",
  Engineer = "Engineer",
  Feeler = "Feeler",
  Feral = "Feral",
  GeneticUplift = "Genetic Uplift",
  Hakshan = "Hakshan",
  HopefulRookie = "Hopeful Rookie",
  Hulker = "Hulker",
  Human = "Human",
  KErin = "K'Erin",
  Manipulator = "Manipulator",
  MinorAlien = "Minor Alien",
  Mutant = "Mutant",
  MysteriousPast = "Mysterious Past",
  Precursor = "Precursor",
  Primitive = "Primitive",
  Soulless = "Soulless",
  Stalker = "Stalker",
  Swift = "Swift",
  Traveler = "Traveler",
  UnityAgent = "Unity Agent"
}

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

export enum EquipmentType {
  Equipment = "Equipment",
  ProtectiveDevice = "Protective Device",
  WeaponMod = "Weapon Mod",
  WeaponSight = "Weapon Sight",
  Consumable = "Consumable",
  Implant = "Implant",
  UtilityDevice = "Utility Device",
  OnBoardItem = "On-Board Item"
}

export enum ProtectiveDeviceType {
  Armor = `Armor`,
  Screen = `Screen`
}

export enum ShipTrait {
  EmergencyDrives = `Emergency Drives: If you have to perform an emergency take-off while your ship is damaged, reduce the Hull damage sustained on the roll by 3.`,
  FuelEfficient = `Fuel Efficient: When traveling to a new world, the fuel cost is reduced by 1 credit.`,
  FuelHog = `Fuel Hog: When traveling to a new world, the fuel cost is increased by 1 credit.`,
  DodgyDrive = `Dodgy Drive: Any time the ship takes Hull damage, roll 2D6. If the roll is equal to or below the amount of damage sustained, the drive is misbehaving, and 2 additional points of damage are sustained.`,
  StandardIssue = `Standard Issue: The cost of all Starship Components is reduced by 1 credit.`,
  Armored = `Armored: Any time the ship takes damage, you lose 1 Hull Point less than indicated by the rules.`
}

export enum VictoryType {
  CampaignTurns = "Campaign Turns",
  Quests = "Quests",
  TabletopBattles = "Tabletop Battles",
  UniqueIndividuals = "Unique Individuals",
  UpgradeCharacters = "Upgrade Characters",
  ChallengingCampaignTurns = "Campaign Turns: Challenging",
  HardcoreCampaignTurns = "Campaign Turns: Hardcore",
  InsanityCampaignTurns = "Campaign Turns: Insanity"
}

export enum WeaponStat {
  Range = "Range",
  Shots = "Shots",
  Damage = "Damage",
  Hit = "Hit"
}

export enum WeaponTrait {
  Area = `Area: Resolve all shots against the initial target. They cannot be spread. Then resolve one bonus shot against every figure within 2".`,
  Clumsy = `Clumsy: -1 to Brawling rolls, if opponent has higher Speed.`,
  Critical = `Critical: A natural 6 on the to Hit roll will inflict 2 Hits on the target.`,
  Elegant = `Elegant: When Brawling, the fighter may reroll the die. Enemies will always reroll if they have a lower total than their opponent, and can improve the result.`,
  Focused = `Focused: All shots must be against a single target.`,
  Heavy = `Heavy: -1 penalty to Hit if the firer moved this round.`,
  Impact = `Impact: If target is Stunned, place a second Stun marker.`,
  Melee = `Melee: +2 to Brawling rolls.`,
  Piercing = `Piercing: Ignore Armor Saving Throws.`,
  Pistol = `Pistol: +1 to Brawling rolls.`,
  SingleUse = `Single Use: The item can be used only once and must be deducted from the available supply. The Panic Fire rule cannot be used with Single Use weapons.`,
  SnapShot = `Snapshot: +1 to Hit within 6".`,
  Stun = `Stun: All targets are automatically Stunned. No damage rolls ake place.`,
  Terrifying = `Terrifying: Any target hit must retreat 1D6" away from the firer.`
}

export enum WeaponType {
  Weapon = "Weapon",
  Sidearm = "Sidearm",
  Pistol = "Pistol",
  Melee = "Melee"
}
