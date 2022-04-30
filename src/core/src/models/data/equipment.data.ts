import { ProtectiveDeviceType } from '../enums';

import {
  Consumable,
  Implant,
  OnBoardItem,
  ProtectiveDevice,
  UtilityDevice
} from '../equipment';

export const Consumables = {
  BoosterPills: new Consumable(
    `Booster Pills`,
    `When taken, the character removes all Stun markers. They may move at double normal Speed this round.`
  ),
  CombatSerum: new Consumable(
    `Combat Serum`,
    `The character receives +2" Speed and +2 Reactions for the rest of the battle.`
  ),
  KiraninCrystals: new Consumable(
    `Kiranin Crystals`,
    `A bright, dazzling display of hypnotic lights will daze any character within 4" of the user, making them unable to act this round. The crystals have no effect on characters that already acted earlier in the round, and do not affect the user. A character that is attacked in Brawling combat will defend themselves normally.`
  ),
  RageOut: new Consumable(
    `Rage Out`,
    `The user gains +2" Speed an +1 to all Brawling rolls for the rest of this and the following round. A K'Erin user gets the benefits for the rest of the battle.`
  ),
  Still: new Consumable(
    `Still`,
    `The user gains +1 to Hit, but cannot Move during this and the next round.`
  ),
  StimPack: new Consumable(
    `Stim-pack`,
    `If a character would become a casualty, they remain on the table with a single Stun marker. This item can be used reflexively upon becoming a casualty. It does not require an action.`
  )
}

export const ConsumableList = [
  Consumables.BoosterPills,
  Consumables.CombatSerum,
  Consumables.KiraninCrystals,
  Consumables.RageOut,
  Consumables.Still,
  Consumables.StimPack
];

export const Implants = {
  AICompanion: new Implant(
    `AI Companion`,
    `When making Savvy rolls, the character may roll twice and pick the better score.`
  ),
  BodyWire: new Implant(
    `Body Wire`,
    `+1 Reactions`
  ),
  BoostedArm: new Implant(
    `Boosted Arm`,
    `Increase Grenade range by 2+". If the character ends their Move in contact with an obstacle that is no taller than the miniature, they may pull themselves up on top (bot not cross) as a Free Action.`
  ),
  BoostedLeg: new Implant(
    `Boosted Leg`,
    `Increase base move and Dash speed by +1" each.`
  ),
  CyberHand: new Implant(
    `Cyber Hand`,
    `The character may take any one Pistol they own and build it into their hand. Range is reduced to half, but the weapon always shoots with +1 to Hit and an additional +1 bonus when Brawling.`
  ),
  GeneticDefenses: new Implant(
    `Genetic Defenses`,
    `5+ Saving Throw, if subjected to any poison, virus, gas, or disease.`
  ),
  HealthBoost: new Implant(
    `Health Boost`,
    `If a post-battle Injury would result in 2+ campaign turns of recovery time, reduce the time by 1. If the character has Toughness 3 when receving this ipmlant, raise it to 4.`
  ),
  NerveAdjuster: new Implant(
    `Nerve Adjuster`,
    `Whenever the character is Stunned for any reason, they receive a 5+ Saving Throw to avoid the Stun.`
  ),
  NeuralOptimization: new Implant(
    `Neural Optimization`,
    `The character cannot be Stunned.`
  ),
  NightSight: new Implant(
    `Night Sight`,
    `The character does not suffer visibility reductions due to darkness, but is affected by smoke, gas, etc. normally.`
  ),
  PainSuppressor: new Implant(
    `Pain Suppressor`,
    `The character can perform crew tasks while in Sick Bay, though they cannot participate in battles.`
  )
}

export const ImplantList = [
  Implants.AICompanion,
  Implants.BodyWire,
  Implants.BoostedArm,
  Implants.BoostedLeg,
  Implants.CyberHand,
  Implants.GeneticDefenses,
  Implants.HealthBoost,
  Implants.NerveAdjuster,
  Implants.NeuralOptimization,
  Implants.NightSight,
  Implants.PainSuppressor
]

export const OnBoardItems = {
  FakeId: new OnBoardItem(
    `Fake ID`,
    `Add +1 to all attempts to obtain a licesne or other legal document`
  ),
  Fixer: new OnBoardItem(
    `Fixer`,
    `One piece of damaged or destroyed personal equipment can be repaired automatically, and at no cost. Single-use.`
  ),
  LoadedDice: new OnBoardItem(
    `Loaded Dice`,
    `Each campaign turn, one crew member may gamble on the side. Roll 1D6. On a 1-4, earh that may credits. On a 5, earn nothing. On a 6, the locals don't take kindly to losing: The dice are lost and the crew member must roll on the post-battle Injury Table.`
  ),
  MedPatch: new OnBoardItem(
    `Med-patch`,
    `A character recovering from an Injury may subtract one campaign turn from the recovery duration required. If this reduces the time to zero turns, they may act normally this campaign turn. Single-use.`
  ),
  NanoDoc: new OnBoardItem(
    `Nano-doc`,
    `Prevent one roll on the post-battle Injury Table, no matter the source of the injury. YOu must decide before rolling the dice. Single-use.`
  ),
  Purifier: new OnBoardItem(
    `Purifier`,
    `Each campaign turn, the Purifier can be used to generate clean water which can be sold off for 1 credit. This does not require a crew member to operate, but only one Purifier may be used at a time.`
  )
}

export const OnBoardItemList = [
  OnBoardItems.FakeId,
  OnBoardItems.Fixer,
  OnBoardItems.LoadedDice,
  OnBoardItems.MedPatch,
  OnBoardItems.NanoDoc,
  OnBoardItems.Purifier
]

export const ProtectiveDevices = {
  BattleDress: new ProtectiveDevice(
    `Battle Dress`,
    `The character counts as +1 Reactions (maximum 4) and receives a Saving Throw of 5+`,
    ProtectiveDeviceType.Armor
  ),
  CamoCloak: new ProtectiveDevice(
    `Camo Cloak`,
    `If character is within 2" of Cover, they are counted as being in Cover. DOes not apply if the shooter is within 4".`,
    ProtectiveDeviceType.Screen
  ),
  CombatArmor: new ProtectiveDevice(
    `Combat Armor`,
    `Saving Throw 5+`,
    ProtectiveDeviceType.Armor
  ),
  DeflectorField: new ProtectiveDevice(
    `Deflector Field`,
    `Automatically deflects a single ranged weapon's Hit per battle. After a Hit is scored, decide if you wish to use the field before any rolls for Toughness or armor are made.`,
    ProtectiveDeviceType.Screen
  ),
  FlakScreen: new ProtectiveDevice(
    `Falk Screen`,
    `All Area weapons striking the wearer, whether through the initial shots or additional attacks fro the Area trait have their Damage reduced by -1 (to a cap of +0).`,
    ProtectiveDeviceType.Screen
  ),
  FlexArmor: new ProtectiveDevice(
    `Flex-armor`,
    `If the character did not move on their last activation, they count as +1 Toughness (to a maximum of 6).`,
    ProtectiveDeviceType.Screen
  ),
  FragVest: new ProtectiveDevice(
    `Frag Vest`,
    `The wearer receives a 6+ Saving Throw, improved to 5+ against any Area attack.`,
    ProtectiveDeviceType.Armor
  ),
  ScreenGenerator: new ProtectiveDevice(
    `Screen Generator`,
    `Receives a 5+ Saving Throw against gunfire. No effect against Area or Melee attacks.`,
    ProtectiveDeviceType.Screen
  ),
  StealthGear: new ProtectiveDevice(
    `Stealth Gear`,
    `Enemies firing from a range over 9" are -1 to Hit.`,
    ProtectiveDeviceType.Armor
  )
}

export const ProtectiveDeviceList = [
  ProtectiveDevices.BattleDress,
  ProtectiveDevices.CamoCloak,
  ProtectiveDevices.CombatArmor,
  ProtectiveDevices.DeflectorField,
  ProtectiveDevices.FlakScreen,
  ProtectiveDevices.FlexArmor,
  ProtectiveDevices.FragVest,
  ProtectiveDevices.ScreenGenerator,
  ProtectiveDevices.StealthGear
]

export const UtilityDevices = {
  AutoSensor: new UtilityDevice(
    `Auto Sensor`,
    `If an enemy begins or ends a move within 4" and Line of Sight of the character, you may immediately fire one shot form any Pistol carried. The shot is resolved `
  ),
  BattleVisor: new UtilityDevice(
    `Battle Visor`,
    `When shooting, the character may reroll any 1s on the firing dice.`
  ),
  Communicator: new UtilityDevice(
    `Communicator`,
    `When making the Reaction roll each round, you may roll one additional die, then choose a die to discard.`
  ),
  ConcealedBlade: new UtilityDevice(
    `Concealed Blade`,
    `If the character begins teh round within 2" of an opponent, they may throw the blade as a Free Action before doing anything else. Roll to Hit normally, resolving the Hit with Damage +0. The blade can be used once per battle, and is replaced afterwards for free.`
  ),
  Displacer: new UtilityDevice(
    `Displacer`,
    `Usable once permission instead of Moving. Aim anywhere in sight. The character teleports to a point 1D6" away in a random direction. If the teleport would end up within a solid obstacle, the device fails and must be Repaired before it can be used again. The character emerges on the same height as the aiming point, which may cause them to fall if they emerge in open air. The character may take a Combat Action after teleporting. If used by a Precursor character, you may establish two "landing points", and select to use either.`
  ),
  DistractionBot: new UtilityDevice(
    `Distraction Bot`,
    `Usable once per battle as a Combat Action. Select an enemy within 12". Next time they would become active, they are unable to act, though they remove Stun markers as normal. Use a small marker to remember.`
  ),
  GrappleLauncher: new UtilityDevice(
    `Grapple Launcher`,
    `As a Combat Action, the character may use the launcher to scale a terrain feature within 1". The character can ascend up to 12" but must reach a surface they can stand on.`
  ),
  GravDampener: new UtilityDevice(
    `Grav Dampener`,
    `The character suffers no damage from faling and can descend from any height with no risk. If dropping more than 6", it counts as the character's Move for the round.`
  ),
  HazardSuit: new UtilityDevice(
    `Hazard Suit`,
    `If the character takes a Hit from an environmental hazard, they receive a 5+ Saving Throw.`
  ),
  HoverBoard: new UtilityDevice(
    `Hover Board`,
    `The character may use the board to move instead of walking. When used, the character can move up to 9" and can ignore any terrain that is man-height or lower. While hover-boarding, the character cannot engage in cobat, but can perform a non-Combat Action as needed.`
  ),
  InstaWall: new UtilityDevice(
    `Insta-wall`,
    `May be used once per mission as a Combat Action. Place a marker within 3", then place a 2" long force wall oriented any way you like, as long as it touches the marker. The wall is man-height an impenetrable to attacks (but does not block sight or mental abilities). At the start of each subsequent round, a D6 is rolled. On a 6, the wall dissipates.`
  ),
  JumpBelt: new UtilityDevice(
    `Jump Belt`,
    `Instead of Moving normally, the character may jump up to 9" directly forward and 3" upwards. Th character may take a Combat Action normally after landing.`
  ),
  MotionTracker: new UtilityDevice(
    `Motion Tracker`,
    `Add +1 to all rolls to Seize the Initiative.`
  ),
  MultiCutter: new UtilityDevice(
    `Multi-cutter`,
    `As a Combat Action, the character can cut a man-sized hole through any terrain feature up to 1" thick. The tool has no effect on force fields.`
  ),
  RoboRabbitsFoot: new UtilityDevice(
    `Robo-rabbit's Foot`,
    `A character with Luck 0 counts as having Luck 1. If the character would die while carrying this, the foot is destroyed (and cannot be Repaired), the character does not roll on the injury table.`
  ),
  ScannerBot: new UtilityDevice(
    `Scanner Bot`,
    `The crew adds +1 to all Seize the Initiative rolls.`
  ),
  SnooperBot: new UtilityDevice(
    `Snooper Bot`,
    `May be deployed before a battle, if the Seize the Initiative roll would be penalized or negated. The penalty can be ignored, but the Bot is Damaged on a D6 roll of a 1.`
  ),
  SonicEmitter: new UtilityDevice(
    `Sonic Emitter`,
    `Any enemy within 5" suffers -1 to all Hit rolls when shooting.`
  ),
  SteelBoots: new UtilityDevice(
    `Steel Boots`,
    `If the character rolls a natural 5 or 6 in a Brawl and wins the Brawl, they may opt to kick instead of striking normally. This hits with Damage +0 and knocks them 1D3" directly backwards. If the opponent is kicked into another character, that character is knocked 1D3" in a random direction.`
  ),
  TimeDistorter: new UtilityDevice(
    `Time Distorter`,
    `Activated as a Free Action. Select up to 3 enemy figures on the battlefield. They are frozen in time until the end of the following round. While in this state, they cannot Move, take Actions, or be affected by attacks or effects in any way. They are unaffected by Morale rolls as well. Single-use`
  )
}

export const UtilityDeviceList = [
  UtilityDevices.AutoSensor,
  UtilityDevices.BattleVisor,
  UtilityDevices.Communicator,
  UtilityDevices.ConcealedBlade,
  UtilityDevices.Displacer,
  UtilityDevices.DistractionBot,
  UtilityDevices.GrappleLauncher,
  UtilityDevices.GravDampener,
  UtilityDevices.HazardSuit,
  UtilityDevices.HoverBoard,
  UtilityDevices.InstaWall,
  UtilityDevices.JumpBelt,
  UtilityDevices.MotionTracker,
  UtilityDevices.MultiCutter,
  UtilityDevices.RoboRabbitsFoot,
  UtilityDevices.ScannerBot,
  UtilityDevices.SnooperBot,
  UtilityDevices.SonicEmitter,
  UtilityDevices.SteelBoots,
  UtilityDevices.TimeDistorter
];
