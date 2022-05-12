import { EquipmentGenerator } from '../generators/equipment.generator';
import { WeaponGenerator } from '../generators/weapon.generator';
import { CampaignResource } from '../models/campaign/campaign-resource';
import { Character } from '../models/character/character';
import { CharacterDetail } from '../models/character/character-detail';
import { CharacterProfileConfig } from '../models/character/character-profile';

import {
  d6,
  dice,
  Datalist
} from '../core';

import {
  CharacterSpecies,
  CharacterStat
} from '../enums';

export const Backgrounds = {
  PeacefulHighTechColony: () => new CharacterDetail(`Peaceful, High-Tech Colony`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    resources: new CampaignResource({ credits: d6() })
  }),
  GiantOvercrowdedDystopianCity: () => new CharacterDetail(`Giant, Overcrowded, Dystopian City`, {
    effects: [{ points: 1, stat: CharacterStat.Speed }]
  }),
  LowTechColony: () => new CharacterDetail(`Low-Tech Colony`, {
    weapons: [WeaponGenerator.GenerateLowTech()]
  }),
  MiningColony: () => new CharacterDetail(`Mining Colony`, {
    effects: [{ points: 1, stat: CharacterStat.Toughness }]
  }),
  MilitaryBrat: () => new CharacterDetail(`Military Brat`, {
    effects: [{ points: 1, stat: CharacterStat.CombatSkill }]
  }),
  SpaceStation: () => new CharacterDetail(`Space Station`, {
    equipment: [EquipmentGenerator.GenerateGear()]
  }),
  MilitaryOutpost: () => new CharacterDetail(`Military Outpost`, {
    effects: [{ points: 1, stat: CharacterStat.Reactions }]
  }),
  Drifter: () => new CharacterDetail(`Drifter`, {
    equipment: [EquipmentGenerator.GenerateGear()]
  }),
  LowerMegacityClass: () => new CharacterDetail(`Lower Megacity Class`, {
    weapons: [WeaponGenerator.GenerateLowTech()]
  }),
  WealthyMerchantFamily: () => new CharacterDetail(`Wealthy Merchant Family`, {
    resources: new CampaignResource({ credits: dice({ six: 2 }).total })
  }),
  FrontierGang: () => new CharacterDetail(`Frontier Gang`, {
    effects: [{ points: 1, stat: CharacterStat.CombatSkill }]
  }),
  ReligiousCult: () => new CharacterDetail(`Religious Cult`, {
    resources: new CampaignResource({
      patrons: 1,
      storyPoints: 1
    })
  }),
  WarTornHellHole: () => new CharacterDetail(`War-Torn Hell-Hole`, {
    effects: [{ points: 1, stat: CharacterStat.Reactions }],
    weapons: [WeaponGenerator.GenerateMilitary()]
  }),
  TechGuild: () => new CharacterDetail(`Tech Guild`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    resources: new CampaignResource({ credits: d6() }),
    weapons: [WeaponGenerator.GenerateHighTech()]
  }),
  SubjugatedColonyOnAlienWorld: () => new CharacterDetail(`Subjugated Colony on Alien World`, {
    equipment: [EquipmentGenerator.GenerateGadget()]
  }),
  LongTermSpaceMission: () => new CharacterDetail(`Long-Term Space Mission`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }]
  }),
  ResearchOutpost: () => new CharacterDetail(`Research Outpost`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    equipment: [EquipmentGenerator.GenerateGadget()]
  }),
  PrimitiveOrRegressedWorld: () => new CharacterDetail(`Primitive or Regressed World`, {
    effects: [{ points: 1, stat: CharacterStat.Toughness }],
    weapons: [WeaponGenerator.GenerateLowTech()]
  }),
  OrphanUtilityProgram: () => new CharacterDetail(`Orphan Utility Program`, {
    resources: new CampaignResource({
      patrons: 1,
      storyPoints: 1
    })
  }),
  IsolationistEnclave: () => new CharacterDetail(`Isolationist Enclave`, {
    resources: new CampaignResource({ rumors: 2 })
  }),
  ComfortableMegacityClass: () => new CharacterDetail(`Comfortable Megacity Class`, {
    resources: new CampaignResource({ credits: d6() })
  }),
  IndustrialWorld: () => new CharacterDetail(`Industrial World`, {
    equipment: [EquipmentGenerator.GenerateGear()]
  }),
  Bureaucrat: () => new CharacterDetail(`Bureaucrat`, {
    resources: new CampaignResource({ credits: d6() })
  }),
  WastelandNomads: () => new CharacterDetail(`Wasteland Nomads`, {
    effects: [{ points: 1, stat: CharacterStat.Reactions }],
    weapons: [WeaponGenerator.GenerateLowTech()]
  }),
  AlienCulture: () => new CharacterDetail(`Alien Culture`, {
    weapons: [WeaponGenerator.GenerateHighTech()]
  })
}

export const BackgroundList = Datalist(Backgrounds);

const BOT_PROFILE = {
  reaction: 2,
  combatSkill: 1,
  toughness: 4,
  savvy: 2,
  maxLuck: 0,
  maxXp: 0,
  useConsumables: false,
  useImplants: false,
  eventTarget: false
} as Partial<CharacterProfileConfig>;

const HUMAN_PROFILE = {
  maxLuck: 3
} as Partial<CharacterProfileConfig>;

export const Characters = {
  AssaultBot: () => new Character(CharacterSpecies.AssaultBot, BOT_PROFILE),
  BioUpgrade: () => new Character(CharacterSpecies.BioUpgrade, HUMAN_PROFILE),
  Bot: () => new Character(CharacterSpecies.Bot, BOT_PROFILE),
  DeConverted: () => new Character(CharacterSpecies.DeConverted, {
    maxSavvy: 0
  }),
  EmoSuppressed: () => new Character(CharacterSpecies.EmoSuppressed, {
    maxLuck: 0
  }),
  Empath: () => new Character(CharacterSpecies.Empath, HUMAN_PROFILE),
  Engineer: () => new Character(CharacterSpecies.Engineer, {
    maxToughness: 4,
    toughness: 2,
    savvy: 1
  }),
  Feeler: () => new Character(CharacterSpecies.Feeler, HUMAN_PROFILE),
  Feral: () => new Character(CharacterSpecies.Feral),
  GeneticUplift: () => new Character(CharacterSpecies.GeneticUplift, {
    reaction: 2,
    speed: 5,
    combatSkill: 1,
    toughness: 4,
    savvy: 1
  }),
  Hakshan: () => new Character(CharacterSpecies.Hakshan),
  HopefulRookie: () => new Character(CharacterSpecies.HopefulRookie, HUMAN_PROFILE),
  Hulker: () => new Character(CharacterSpecies.Hulker, {
    combatSkill: 1,
    toughness: 5
  }),
  Human: () => new Character(CharacterSpecies.Human, HUMAN_PROFILE),
  KErin: () => new Character(CharacterSpecies.KErin, {
    toughness: 4
  }),
  Manipulator: () => new Character(CharacterSpecies.Manipulator, {
    reaction: 2,
    savvy: 1
  }),
  MinorAlien: () => new Character(CharacterSpecies.MinorAlien, HUMAN_PROFILE),
  Mutant: () => new Character(CharacterSpecies.Mutant, HUMAN_PROFILE),
  MysteriousPast: () => new Character(CharacterSpecies.MysteriousPast, HUMAN_PROFILE),
  Precursor: () => new Character(CharacterSpecies.Precursor, {
    speed: 5,
    toughness: 2
  }),
  Primitive: () => new Character(CharacterSpecies.Primitive, HUMAN_PROFILE),
  Soulless: () => new Character(CharacterSpecies.Soulless, {
    toughness: 4,
    savvy: 1
  }),
  Stalker: () => new Character(CharacterSpecies.Stalker),
  Swift: () => new Character(CharacterSpecies.Swift, {
    speed: 5
  }),
  Traveler: () => new Character(CharacterSpecies.Traveler, {
    reaction: 3,
    toughness: 4,
    savvy: 2
  }),
  UnityAgent: () => new Character(CharacterSpecies.UnityAgent, {
    reaction: 2
  })
}

export const CharacterList = Datalist(Characters);

export const Classes = {
  WorkingClass: () => new CharacterDetail(`Working Class`, {
    effects: [
      { points: 1, stat: CharacterStat.Savvy },
      { points: 1, stat: CharacterStat.Luck }
    ]
  }),
  Technician: () => new CharacterDetail(`Technician`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    equipment: [EquipmentGenerator.GenerateGear()]
  }),
  Scientist: () => new CharacterDetail(`Scientist`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    equipment: [EquipmentGenerator.GenerateGadget()]
  }),
  Hacker: () => new CharacterDetail(`Hacker`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    resources: new CampaignResource({ rivals: 1 })
  }),
  Soldier: () => new CharacterDetail(`Soldier`, {
    effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
    resources: new CampaignResource({ credits: d6() })
  }),
  Mercenary: () => new CharacterDetail(`Mercenary`, {
    effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
    weapons: [WeaponGenerator.GenerateMilitary()]
  }),
  Agitator: () => new CharacterDetail(`Agitator`, {
    resources: new CampaignResource({ rivals: 1 })
  }),
  Primitive: () => new CharacterDetail(`Primitive`, {
    effects: [{ points: 1, stat: CharacterStat.Speed }],
    weapons: [WeaponGenerator.GenerateLowTech()]
  }),
  Artist: () => new CharacterDetail(`Artist`, {
    resources: new CampaignResource({ credits: d6() })
  }),
  Negotiator: () => new CharacterDetail(`Negotiator`, {
    resources: new CampaignResource({ patrons: 1, storyPoints: 1 })
  }),
  Trader: () => new CharacterDetail(`Trader`, {
    resources: new CampaignResource({ credits: dice({ six: 2 }).total })
  }),
  StarshipCrew: () => new CharacterDetail(`Starship Crew`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }]
  }),
  PettyCriminal: () => new CharacterDetail(`Petty Criminal`, {
    effects: [{ points: 1, stat: CharacterStat.Speed }]
  }),
  Ganger: () => new CharacterDetail(`Ganger`, {
    effects: [{ points: 1, stat: CharacterStat.Reactions }],
    weapons: [WeaponGenerator.GenerateLowTech()]
  }),
  Scoundrel: () => new CharacterDetail(`Scoundrel`, {
    effects: [{ points: 1, stat: CharacterStat.Speed }]
  }),
  Enforcer: () => new CharacterDetail(`Enforcer`, {
    effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
    resources: new CampaignResource({ patrons: 1 })
  }),
  SpecialAgent: () => new CharacterDetail(`Special Agent`, {
    effects: [{ points: 1, stat: CharacterStat.Reactions }],
    resources: new CampaignResource({ patrons: 1 }),
    equipment: [EquipmentGenerator.GenerateGadget()]
  }),
  Troubleshooter: () => new CharacterDetail(`Troubleshooter`, {
    effects: [{ points: 1, stat: CharacterStat.Reactions }],
    weapons: [WeaponGenerator.GenerateLowTech()]
  }),
  BountyHunter: () => new CharacterDetail(`Bounty Hunter`, {
    effects: [{ points: 1, stat: CharacterStat.Speed }],
    resources: new CampaignResource({ rumors: 1 }),
    weapons: [WeaponGenerator.GenerateLowTech()]
  }),
  Nomad: () => new CharacterDetail(`Nomad`, {
    equipment: [EquipmentGenerator.GenerateGear()]
  }),
  Explorer: () => new CharacterDetail(`Explorer`, {
    effects: [{ points: 2, stat: CharacterStat.XP }],
    equipment: [EquipmentGenerator.GenerateGear()]
  }),
  Punk: () => new CharacterDetail(`Punk`, {
    effects: [{ points: 2, stat: CharacterStat.XP }],
    resources: new CampaignResource({ rivals: 1 })
  }),
  Scavenger: () => new CharacterDetail(`Scavenger`, {
    resources: new CampaignResource({ rumors: 1 }),
    weapons: [WeaponGenerator.GenerateHighTech()]
  })
}

export const ClassList = Datalist(Classes);

export const Motivations = {
  Wealth: () => new CharacterDetail(`Wealth`, {
    resources: new CampaignResource({ credits: d6() })
  }),
  Fame: () => new CharacterDetail(`Fame`, {
    resources: new CampaignResource({ storyPoints: 1 })
  }),
  Glory: () => new CharacterDetail(`Glory`, {
    effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
    weapons: [WeaponGenerator.GenerateMilitary()]
  }),
  Survival: () => new CharacterDetail(`Survival`, {
    effects: [{ points: 1, stat: CharacterStat.Toughness }]
  }),
  Escape: () => new CharacterDetail(`Escape`, {
    effects: [{ points: 1, stat: CharacterStat.Speed }]
  }),
  Adventure: () => new CharacterDetail(`Adventure`, {
    resources: new CampaignResource({ credits: d6() }),
    weapons: [WeaponGenerator.GenerateLowTech()]
  }),
  Truth: () => new CharacterDetail(`Truth`, {
    resources: new CampaignResource({
      rumors: 1,
      storyPoints: 1
    })
  }),
  Technology: () => new CharacterDetail(`Technology`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    equipment: [EquipmentGenerator.GenerateGadget()]
  }),
  Discovery: () => new CharacterDetail(`Discovery`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    equipment: [EquipmentGenerator.GenerateGear()]
  }),
  Loyalty: () => new CharacterDetail(`Loyalty`, {
    resources: new CampaignResource({ patrons: 1, storyPoints: 1 })
  }),
  Revenge: () => new CharacterDetail(`Revenge`, {
    effects: [{ points: 2, stat: CharacterStat.XP }],
    resources: new CampaignResource({ rivals: 1 })
  }),
  Romance: () => new CharacterDetail(`Romance`, {
    resources: new CampaignResource({ rumors: 1, storyPoints: 1 })
  }),
  Faith: () => new CharacterDetail(`Faith`, {
    resources: new CampaignResource({ rumors: 1, storyPoints: 1 })
  }),
  Political: () => new CharacterDetail(`Political`, {
    resources: new CampaignResource({ patrons: 1, storyPoints: 1 })
  }),
  Power: () => new CharacterDetail(`Power`, {
    effects: [{ points: 2, stat: CharacterStat.XP }],
    resources: new CampaignResource({ rivals: 1 })
  }),
  Order: () => new CharacterDetail(`Order`, {
    resources: new CampaignResource({ patrons: 1, storyPoints: 1 })
  }),
  Freedom: () => new CharacterDetail(`Freedom`, {
    effects: [{ points: 2, stat: CharacterStat.XP }]
  })
}

export const MotivationList = Datalist(Motivations);
