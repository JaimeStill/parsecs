import { Datalist } from '../core';

import {
  EquipmentType,
  ProtectiveDeviceType
} from '../enums';

import {
  Consumable,
  Implant,
  OnBoardItem,
  ProtectiveDevice,
  UtilityDevice,
  WeaponMod,
  WeaponSight
} from '../models/equipment/equipment';

export const Consumables = {
  BoosterPills: () => new Consumable(
    `Booster Pills`,
    `When taken, the character removes all Stun markers. They may move at double normal Speed this round.`,
    EquipmentType.Consumable
  ),
  CombatSerum: () => new Consumable(
    `Combat Serum`,
    `The character receives +2" Speed and +2 Reactions for the rest of the battle.`,
    EquipmentType.Consumable
  ),
  KiraninCrystals: () => new Consumable(
    `Kiranin Crystals`,
    `A bright, dazzling display of hypnotic lights will daze any character within 4" of the user, making them unable to act this round. The crystals have no effect on characters that already acted earlier in the round, and do not affect the user. A character that is attacked in Brawling combat will defend themselves normally.`,
    EquipmentType.Consumable
  ),
  RageOut: () => new Consumable(
    `Rage Out`,
    `The user gains +2" Speed an +1 to all Brawling rolls for the rest of this and the following round. A K'Erin user gets the benefits for the rest of the battle.`,
    EquipmentType.Consumable
  ),
  Still: () => new Consumable(
    `Still`,
    `The user gains +1 to Hit, but cannot Move during this and the next round.`,
    EquipmentType.Consumable
  ),
  StimPack: () => new Consumable(
    `Stim-pack`,
    `If a character would become a casualty, they remain on the table with a single Stun marker. This item can be used reflexively upon becoming a casualty. It does not require an action.`,
    EquipmentType.Consumable
  )
}

export const ConsumableList = Datalist(Consumables);

export const Implants = {
  AICompanion: () => new Implant(
    `AI Companion`,
    `When making Savvy rolls, the character may roll twice and pick the better score.`,
    EquipmentType.Implant
  ),
  BodyWire: () => new Implant(
    `Body Wire`,
    `+1 Reactions`,
    EquipmentType.Implant
  ),
  BoostedArm: () => new Implant(
    `Boosted Arm`,
    `Increase Grenade range by 2+". If the character ends their Move in contact with an obstacle that is no taller than the miniature, they may pull themselves up on top (bot not cross) as a Free Action.`,
    EquipmentType.Implant
  ),
  BoostedLeg: () => new Implant(
    `Boosted Leg`,
    `Increase base move and Dash speed by +1" each.`,
    EquipmentType.Implant
  ),
  CyberHand: () => new Implant(
    `Cyber Hand`,
    `The character may take any one Pistol they own and build it into their hand. Range is reduced to half, but the weapon always shoots with +1 to Hit and an additional +1 bonus when Brawling.`,
    EquipmentType.Implant
  ),
  GeneticDefenses: () => new Implant(
    `Genetic Defenses`,
    `5+ Saving Throw, if subjected to any poison, virus, gas, or disease.`,
    EquipmentType.Implant
  ),
  HealthBoost: () => new Implant(
    `Health Boost`,
    `If a post-battle Injury would result in 2+ campaign turns of recovery time, reduce the time by 1. If the character has Toughness 3 when receving this ipmlant, raise it to 4.`,
    EquipmentType.Implant
  ),
  NerveAdjuster: () => new Implant(
    `Nerve Adjuster`,
    `Whenever the character is Stunned for any reason, they receive a 5+ Saving Throw to avoid the Stun.`,
    EquipmentType.Implant
  ),
  NeuralOptimization: () => new Implant(
    `Neural Optimization`,
    `The character cannot be Stunned.`,
    EquipmentType.Implant
  ),
  NightSight: () => new Implant(
    `Night Sight`,
    `The character does not suffer visibility reductions due to darkness, but is affected by smoke, gas, etc. normally.`,
    EquipmentType.Implant
  ),
  PainSuppressor: () => new Implant(
    `Pain Suppressor`,
    `The character can perform crew tasks while in Sick Bay, though they cannot participate in battles.`,
    EquipmentType.Implant
  )
}

export const ImplantList = Datalist(Implants);

export const OnBoardItems = {
  Analyzer: () => new OnBoardItem(
    `Analyzer`,
    `Add +1 when rolling to see if Rumors result in a Quest and when rolling for Quest resolution`,
    EquipmentType.OnBoardItems
  ),
  ColonistRationPacks: () => new OnBoardItem(
    `Colonist Ration Packs`,
    `Ignore Upkeep costs for one campaign turn. +1 story point. Single-use.`,
    EquipmentType.OnBoardItems
  ),
  Duplicator: () => new OnBoardItem(
    `Duplicator`,
    `Create a perfect copy of one item in your inventory. A Duplicator cannot copy a Duplicator, due to the same proprietary nano-bot lock-out codes that makes your printer say it's out of ink after printing 17 pages. Single-use`,
    EquipmentType.OnBoardItems
  ),
  FakeId: () => new OnBoardItem(
    `Fake ID`,
    `Add +1 to all attempts to obtain a licesne or other legal document`,
    EquipmentType.OnBoardItems
  ),
  Fixer: () => new OnBoardItem(
    `Fixer`,
    `One piece of damaged or destroyed personal equipment can be repaired automatically, and at no cost. Single-use.`,
    EquipmentType.OnBoardItems
  ),
  GeneticReconfigurationKit: () => new OnBoardItem(
    `Genetic Reconfiguration Kit`,
    `Reduce the cost of an ability score upgrade by 2 XP. Has no effect on Bots or Soulless. K'Erin may only use this to increase Toughness. Single-use.`,
    EquipmentType.OnBoardItems
  ),
  LoadedDice: () => new OnBoardItem(
    `Loaded Dice`,
    `Each campaign turn, one crew member may gamble on the side. Roll 1D6. On a 1-4, earh that may credits. On a 5, earn nothing. On a 6, the locals don't take kindly to losing: The dice are lost and the crew member must roll on the post-battle Injury Table.`,
    EquipmentType.OnBoardItems
  ),
  LuckyDice: () => new OnBoardItem(
    `Lucky Dice`,
    `Each campaign turn, one crew member may gamble on the sdie, earning +1 credit. If you have both Lucky and Loaded Dice, you can use both, but rolling a 6 for the Loaded dice means you lose both sets of dice.`,
    EquipmentType.OnBoardItems
  ),
  MkIITranslator: () => new OnBoardItem(
    `Mk II Translator`,
    `When rolling to Recruit, you may roll an additional D6.`,
    EquipmentType.OnBoardItems
  ),
  MedPatch: () => new OnBoardItem(
    `Med-patch`,
    `A character recovering from an Injury may subtract one campaign turn from the recovery duration required. If this reduces the time to zero turns, they may act normally this campaign turn. Single-use.`,
    EquipmentType.OnBoardItems
  ),
  MeditationOrb: () => new OnBoardItem(
    `Meditation Orb`,
    `The crew all feel reassured of their karmic balance. Add +2 story points. All Swift or Precursor in the crew may also add +1 XP. Single-use.`,
    EquipmentType.OnBoardItems
  ),
  NanoDoc: () => new OnBoardItem(
    `Nano-doc`,
    `Prevent one roll on the post-battle Injury Table, no matter the source of the injury. You must decide before rolling the dice. Single-use.`,
    EquipmentType.OnBoardItems
  ),
  NoveltyStuffedAnimal: () => new OnBoardItem(
    `Novelty Stuffed Animal`,
    `Give to any character that isn't Soulless, K'Erin, or a Bot. The character receives +1 XP, and may roll 1D6. On a 6, you may add +1 story point as well. Single-use.`,
    EquipmentType.OnBoardItems
  ),
  Purifier: () => new OnBoardItem(
    `Purifier`,
    `Each campaign turn, the Purifier can be used to generate clean water which can be sold off for 1 credit. This does not require a crew member to operate, but only one Purifier may be used at a time.`,
    EquipmentType.OnBoardItems
  ),
  RepairBot: () => new OnBoardItem(
    `Repair Bot`,
    `+1 to all Repair attempts`,
    EquipmentType.OnBoardItems
  ),
  SectorPermit: () => new OnBoardItem(
    `Sector Permit`,
    `Whenever you arrive at a planet where a license is required, roll 1D6. On a 4+, the Sector Permit is accepted. You must roll for each license type, on each planet.`,
    EquipmentType.OnBoardItems
  ),
  SpareParts: () => new OnBoardItem(
    `Spare Parts`,
    `Add +1 when making a Repair attempt. If the roll is a natural 1, the Spare Parts are used up and must be erased from your roster.`,
    EquipmentType.OnBoardItems
  ),
  TeachBot: () => new OnBoardItem(
    `Teach-bot`,
    `A character engaging in the Train crew task will earn 1D6 additional XP. Single-use.`,
    EquipmentType.OnBoardItems
  ),
  Transcender: () => new OnBoardItem(
    `Transcender`,
    `The character activating this mysterious device receives +1 XP. The entire crew makes realizations about thier place in the cosmos. Add +2 story points. Single-use.`,
    EquipmentType.OnBoardItems
  )
}

export const OnBoardItemList = Datalist(OnBoardItems);

export const ProtectiveDevices = {
  BattleDress: () => new ProtectiveDevice(
    `Battle Dress`,
    `The character counts as +1 Reactions (maximum 4) and receives a Saving Throw of 5+`,
    EquipmentType.ProtectiveDevice,
    ProtectiveDeviceType.Armor
  ),
  CamoCloak: () => new ProtectiveDevice(
    `Camo Cloak`,
    `If character is within 2" of Cover, they are counted as being in Cover. Does not apply if the shooter is within 4".`,
    EquipmentType.ProtectiveDevice,
    ProtectiveDeviceType.Screen
  ),
  CombatArmor: () => new ProtectiveDevice(
    `Combat Armor`,
    `Saving Throw 5+`,
    EquipmentType.ProtectiveDevice,
    ProtectiveDeviceType.Armor
  ),
  DeflectorField: () => new ProtectiveDevice(
    `Deflector Field`,
    `Automatically deflects a single ranged weapon's Hit per battle. After a Hit is scored, decide if you wish to use the field before any rolls for Toughness or armor are made.`,
    EquipmentType.ProtectiveDevice,
    ProtectiveDeviceType.Screen
  ),
  FlakScreen: () => new ProtectiveDevice(
    `Falk Screen`,
    `All Area weapons striking the wearer, whether through the initial shots or additional attacks fro the Area trait have their Damage reduced by -1 (to a cap of +0).`,
    EquipmentType.ProtectiveDevice,
    ProtectiveDeviceType.Screen
  ),
  FlexArmor: () => new ProtectiveDevice(
    `Flex-armor`,
    `If the character did not move on their last activation, they count as +1 Toughness (to a maximum of 6).`,
    EquipmentType.ProtectiveDevice,
    ProtectiveDeviceType.Screen
  ),
  FragVest: () => new ProtectiveDevice(
    `Frag Vest`,
    `The wearer receives a 6+ Saving Throw, improved to 5+ against any Area attack.`,
    EquipmentType.ProtectiveDevice,
    ProtectiveDeviceType.Armor
  ),
  ScreenGenerator: () => new ProtectiveDevice(
    `Screen Generator`,
    `Receives a 5+ Saving Throw against gunfire. No effect against Area or Melee attacks.`,
    EquipmentType.ProtectiveDevice,
    ProtectiveDeviceType.Screen
  ),
  StealthGear: () => new ProtectiveDevice(
    `Stealth Gear`,
    `Enemies firing from a range over 9" are -1 to Hit.`,
    EquipmentType.ProtectiveDevice,
    ProtectiveDeviceType.Armor
  )
}

export const ProtectiveDeviceList = Datalist(ProtectiveDevices);

export const UtilityDevices = {
  AutoSensor: () => new UtilityDevice(
    `Auto Sensor`,
    `If an enemy begins or ends a move within 4" and Line of Sight of the character, you may immediately fire one shot form any Pistol carried. The shot is resolved `,
    EquipmentType.UtilityDevice
  ),
  BattleVisor: () => new UtilityDevice(
    `Battle Visor`,
    `When shooting, the character may reroll any 1s on the firing dice.`,
    EquipmentType.UtilityDevice
  ),
  Communicator: () => new UtilityDevice(
    `Communicator`,
    `When making the Reaction roll each round, you may roll one additional die, then choose a die to discard.`,
    EquipmentType.UtilityDevice
  ),
  ConcealedBlade: () => new UtilityDevice(
    `Concealed Blade`,
    `If the character begins the round within 2" of an opponent, they may throw the blade as a Free Action before doing anything else. Roll to Hit normally, resolving the Hit with Damage +0. The blade can be used once per battle, and is replaced afterwards for free.`,
    EquipmentType.UtilityDevice
  ),
  Displacer: () => new UtilityDevice(
    `Displacer`,
    `Usable once permission instead of Moving. Aim anywhere in sight. The character teleports to a point 1D6" away in a random direction. If the teleport would end up within a solid obstacle, the device fails and must be Repaired before it can be used again. The character emerges on the same height as the aiming point, which may cause them to fall if they emerge in open air. The character may take a Combat Action after teleporting. If used by a Precursor character, you may establish two "landing points", and select to use either.`,
    EquipmentType.UtilityDevice
  ),
  DistractionBot: () => new UtilityDevice(
    `Distraction Bot`,
    `Usable once per battle as a Combat Action. Select an enemy within 12". Next time they would become active, they are unable to act, though they remove Stun markers as normal. Use a small marker to remember.`,
    EquipmentType.UtilityDevice
  ),
  GrappleLauncher: () => new UtilityDevice(
    `Grapple Launcher`,
    `As a Combat Action, the character may use the launcher to scale a terrain feature within 1". The character can ascend up to 12" but must reach a surface they can stand on.`,
    EquipmentType.UtilityDevice
  ),
  GravDampener: () => new UtilityDevice(
    `Grav Dampener`,
    `The character suffers no damage from faling and can descend from any height with no risk. If dropping more than 6", it counts as the character's Move for the round.`,
    EquipmentType.UtilityDevice
  ),
  HazardSuit: () => new UtilityDevice(
    `Hazard Suit`,
    `If the character takes a Hit from an environmental hazard, they receive a 5+ Saving Throw.`,
    EquipmentType.UtilityDevice
  ),
  HoverBoard: () => new UtilityDevice(
    `Hover Board`,
    `The character may use the board to move instead of walking. When used, the character can move up to 9" and can ignore any terrain that is man-height or lower. While hover-boarding, the character cannot engage in cobat, but can perform a non-Combat Action as needed.`,
    EquipmentType.UtilityDevice
  ),
  InstaWall: () => new UtilityDevice(
    `Insta-wall`,
    `May be used once per mission as a Combat Action. Place a marker within 3", then place a 2" long force wall oriented any way you like, as long as it touches the marker. The wall is man-height an impenetrable to attacks (but does not block sight or mental abilities). At the start of each subsequent round, a D6 is rolled. On a 6, the wall dissipates.`,
    EquipmentType.UtilityDevice
  ),
  JumpBelt: () => new UtilityDevice(
    `Jump Belt`,
    `Instead of Moving normally, the character may jump up to 9" directly forward and 3" upwards. Th character may take a Combat Action normally after landing.`,
    EquipmentType.UtilityDevice
  ),
  MotionTracker: () => new UtilityDevice(
    `Motion Tracker`,
    `Add +1 to all rolls to Seize the Initiative.`,
    EquipmentType.UtilityDevice
  ),
  MultiCutter: () => new UtilityDevice(
    `Multi-cutter`,
    `As a Combat Action, the character can cut a man-sized hole through any terrain feature up to 1" thick. The tool has no effect on force fields.`,
    EquipmentType.UtilityDevice
  ),
  RoboRabbitsFoot: () => new UtilityDevice(
    `Robo-rabbit's Foot`,
    `A character with Luck 0 counts as having Luck 1. If the character would die while carrying this, the foot is destroyed (and cannot be Repaired), the character does not roll on the injury table.`,
    EquipmentType.UtilityDevice
  ),
  ScannerBot: () => new UtilityDevice(
    `Scanner Bot`,
    `The crew adds +1 to all Seize the Initiative rolls.`,
    EquipmentType.UtilityDevice
  ),
  SnooperBot: () => new UtilityDevice(
    `Snooper Bot`,
    `May be deployed before a battle, if the Seize the Initiative roll would be penalized or negated. The penalty can be ignored, but the Bot is Damaged on a D6 roll of a 1.`,
    EquipmentType.UtilityDevice
  ),
  SonicEmitter: () => new UtilityDevice(
    `Sonic Emitter`,
    `Any enemy within 5" suffers -1 to all Hit rolls when shooting.`,
    EquipmentType.UtilityDevice
  ),
  SteelBoots: () => new UtilityDevice(
    `Steel Boots`,
    `If the character rolls a natural 5 or 6 in a Brawl and wins the Brawl, they may opt to kick instead of striking normally. This hits with Damage +0 and knocks them 1D3" directly backwards. If the opponent is kicked into another character, that character is knocked 1D3" in a random direction.`,
    EquipmentType.UtilityDevice
  ),
  TimeDistorter: () => new UtilityDevice(
    `Time Distorter`,
    `Activated as a Free Action. Select up to 3 enemy figures on the battlefield. They are frozen in time until the end of the following round. While in this state, they cannot Move, take Actions, or be affected by attacks or effects in any way. They are unaffected by Morale rolls as well. Single-use`,
    EquipmentType.UtilityDevice
  )
}

export const UtilityDeviceList = Datalist(UtilityDevices);

export const WeaponMods = {
  AssaultBlade: () => new WeaponMod(
    `Assault Blade`,
    `The weapon gains the Melee trait. Damage +1, and wins combat on a Draw.`,
    EquipmentType.WeaponMod,
    false
  ),
  BeamLight: () => new WeaponMod(
    `Beam Light`,
    `When using the weapon in conditions of reduced visibility, increase visibility by +3".`,
    EquipmentType.WeaponMod,
    true
  ),
  Bipod: () => new WeaponMod(
    `Bipod`,
    `The weapon recieve +1 to Hit at ranges over 8" when Aiming or when firing from Cover.`,
    EquipmentType.WeaponMod,
    false
  ),
  HotShotPack: () => new WeaponMod(
    `Hot Shot Pack`,
    `If fittedto a Blast Pistol, Blast Rifle, Hand Laser, or Infantry Laser, +1 Damage. Any natural 6 on the shooting dice causes an overheat, rendering the weapon inoperable for the rest of the fight.`,
    EquipmentType.WeaponMod,
    true
  ),
  CyberConfigurableNanoSludge: () => new WeaponMod(
    `Cyber-configurable Nano-sludge`,
    `The weapon receives a permanent +1 Hit bonus.`,
    EquipmentType.WeaponMod,
    true
  ),
  Stabilizer: () => new WeaponMod(
    `Stabilizer`,
    `Weapon may ignore Heavy trait.`,
    EquipmentType.WeaponMod,
    true
  ),
  ShockAttachment: () => new WeaponMod(
    `Shock Attachment`,
    `The weapon receives the Impact trait against targets within 8".`,
    EquipmentType.WeaponMod,
    true
  ),
  UpgradeKit: () => new WeaponMod(
    `Upgrade Kit`,
    `+2" Range increase.`,
    EquipmentType.WeaponMod,
    true
  )
}

export const WeaponModList = Datalist(WeaponMods);

export const WeaponSights = {
  LaserSight: () => new WeaponSight(
    `Laser Sight`,
    `The weapon receives thet Snap Shot trait.`,
    EquipmentType.WeaponSight,
    true
  ),
  QualitySight: () => new WeaponSight(
    `Quality Sight`,
    `+2" Range increase. Reroll 1s when firing only 1 shot.`,
    EquipmentType.WeaponSight,
    false
  ),
  SeekerSight: () => new WeaponSight(
    `Seeker Sight`,
    `The weapon receives a +1 to Hit if the shooter did not Move this round.`,
    EquipmentType.WeaponSight,
    false
  ),
  TrackerSight: () => new WeaponSight(
    `Tracker Sight`,
    `+1 to Hit if you fired at the same target during your previous round.`,
    EquipmentType.WeaponSight,
    false
  ),
  UnityBattleSight: () => new WeaponSight(
    `Unity Battle Sight`,
    `+1 to all Hit rolls.`,
    EquipmentType.WeaponSight,
    false
  )
}

export const WeaponSightList = Datalist(WeaponSights);

