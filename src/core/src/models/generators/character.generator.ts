import { CharacterStat } from '../enums';

import {
  Alien,
  AssaultBot,
  BioUpgrade,
  Bot,
  Character,
  CharacterDetail,
  DeConverted,
  EmoSuppressed,
  Empath,
  Engineer,
  Feeler,
  Feral,
  GeneticUplift,
  Hakshan,
  HopefulRookie,
  Hulker,
  Human,
  KErin,
  Manipulator,
  MinorAlien,
  Mutant,
  MysteriousPast,
  Precursor,
  Primitive,
  Soulless,
  Stalker,
  Swift,
  Traveler,
  UnityAgent
} from '../character';

import {
  d6,
  d100,
  dice
} from '../dice';

import {
  Generator,
  GeneratorOption
} from './generator';

import { EquipmentGenerator } from './equipment.generator';
import { WeaponGenerator } from './weapon.generator';

export abstract class CharacterGenerator {

  static GenerateCharacter = (): Character =>
    Generator(d100, [
      new GeneratorOption(
        [1, 60], new Human()
      ),
      new GeneratorOption(
        [61, 80], this.GenerateAlien()
      ),
      new GeneratorOption(
        [81, 90], new Bot()
      ),
      new GeneratorOption(
        [91, 100], this.GenerateStrange()
      )
    ]);

  static GenerateBackground = (): CharacterDetail =>
    Generator(d100, this.BackgroundTable);

  static GenerateMotivation = (): CharacterDetail =>
    Generator(d100, this.MotivationTable);

  static GenerateClass = (): CharacterDetail =>
    Generator(d100, this.ClassTable);

  static GenerateAlien = (): Alien =>
    Generator(d100, [
      new GeneratorOption(
        [1, 20],
        new Engineer()
      ),
      new GeneratorOption(
        [21, 40],
        new KErin()
      ),
      new GeneratorOption(
        [41, 55],
        new Soulless()
      ),
      new GeneratorOption(
        [56, 70],
        new Precursor()
      ),
      new GeneratorOption(
        [71, 90],
        new Feral()
      ),
      new GeneratorOption(
        [91, 100],
        new Swift()
      )
    ]);

  static GenerateStrange = (): Character =>
    Generator(d100, [
      new GeneratorOption(
        [1, 2], new DeConverted()
      ),
      new GeneratorOption(
        [3, 8], new UnityAgent()
      ),
      new GeneratorOption(
        [9, 17], new MysteriousPast()
      ),
      new GeneratorOption(
        [18, 22], new Hakshan()
      ),
      new GeneratorOption(
        [23, 27], new Stalker()
      ),
      new GeneratorOption(
        [28, 34], new Hulker()
      ),
      new GeneratorOption(
        [35, 41], new HopefulRookie()
      ),
      new GeneratorOption(
        [42, 47], new GeneticUplift()
      ),
      new GeneratorOption(
        [48, 53], new Mutant()
      ),
      new GeneratorOption(
        [54, 58], new AssaultBot()
      ),
      new GeneratorOption(
        [59, 62], new Manipulator()
      ),
      new GeneratorOption(
        [63, 67], new Primitive()
      ),
      new GeneratorOption(
        [68, 73], new Feeler()
      ),
      new GeneratorOption(
        [74, 79], new EmoSuppressed()
      ),
      new GeneratorOption(
        [80, 85], new MinorAlien()
      ),
      new GeneratorOption(
        [86, 87], new Traveler()
      ),
      new GeneratorOption(
        [88, 93], new Empath()
      ),
      new GeneratorOption(
        [94, 100], new BioUpgrade()
      )
    ]);

  static BackgroundTable = new Array<GeneratorOption<CharacterDetail>>(
    new GeneratorOption(
      [1, 4], new CharacterDetail(`Peaceful, High-Tech Colony`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        resources: { credits: d6() }
      })
    ),
    new GeneratorOption(
      [5, 9], new CharacterDetail(`Giant, Overcrowded, Dystopian City`, {
        effects: [{ points: 1, stat: CharacterStat.Speed }]
      })
    ),
    new GeneratorOption(
      [10, 13], new CharacterDetail(`Low-Tech Colony`, {
        equipment: WeaponGenerator.GenerateLowTech()
      })
    ),
    new GeneratorOption(
      [14, 17], new CharacterDetail(`Mining Colony`, {
        effects: [{ points: 1, stat: CharacterStat.Toughness }]
      })
    ),
    new GeneratorOption(
      [18, 21], new CharacterDetail(`Military Brat`, {
        effects: [{ points: 1, stat: CharacterStat.CombatSkill }]
      })
    ),
    new GeneratorOption(
      [22, 25], new CharacterDetail(`Space Station`, {
        equipment: EquipmentGenerator.GenerateGear()
      })
    ),
    new GeneratorOption(
      [26, 29], new CharacterDetail(`Military Outpost`, {
        effects: [{ points: 1, stat: CharacterStat.Reactions }]
      })
    ),
    new GeneratorOption(
      [30, 34], new CharacterDetail(`Drifter`, {
        equipment: EquipmentGenerator.GenerateGear()
      })
    ),
    new GeneratorOption(
      [35, 39], new CharacterDetail(`Lower Megacity Class`, {
        equipment: WeaponGenerator.GenerateLowTech()
      })
    ),
    new GeneratorOption(
      [40, 42], new CharacterDetail(`Wealthy Merchantt Family`, {
        resources: { credits: dice({ six: 2 }).total }
      })
    ),
    new GeneratorOption(
      [43, 46], new CharacterDetail(`Frontier Gang`, {
        effects: [{ points: 1, stat: CharacterStat.CombatSkill }]
      })
    ),
    new GeneratorOption(
      [47, 49], new CharacterDetail(`Religious Cult`, {
        resources: {
          patron: true,
          storyPoints: 1
        }
      })
    ),
    new GeneratorOption(
      [50, 52], new CharacterDetail(`War-Torn Hell-Hole`, {
        effects: [{ points: 1, stat: CharacterStat.Reactions }],
        equipment: WeaponGenerator.GenerateMilitary()
      })
    ),
    new GeneratorOption(
      [53, 55], new CharacterDetail(`Tech Guild`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        resources: { credits: d6() },
        equipment: WeaponGenerator.GenerateHighTech()
      })
    ),
    new GeneratorOption(
      [56, 59], new CharacterDetail(`Subjugated Colony on Alien World`, {
        equipment: EquipmentGenerator.GenerateGadget()
      })
    ),
    new GeneratorOption(
      [60, 64], new CharacterDetail(`Long-Term Space Mision`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }]
      })
    ),
    new GeneratorOption(
      [65, 68], new CharacterDetail(`Research Outpost`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        equipment: EquipmentGenerator.GenerateGadget()
      })
    ),
    new GeneratorOption(
      [69, 72], new CharacterDetail(`Primitive or Regressed World`, {
        effects: [{ points: 1, stat: CharacterStat.Toughness }],
        equipment: WeaponGenerator.GenerateLowTech()
      })
    ),
    new GeneratorOption(
      [73, 76], new CharacterDetail(`Orphan Utility Program`, {
        resources: {
          patron: true,
          storyPoints: 1
        }
      })
    ),
    new GeneratorOption(
      [77, 80], new CharacterDetail(`Isolationist Enclave`, {
        resources: { rumors: 2 }
      })
    ),
    new GeneratorOption(
      [81, 84], new CharacterDetail(`Comfortable Megacity Class`, {
        resources: { credits: d6() }
      })
    ),
    new GeneratorOption(
      [85, 89], new CharacterDetail(`Industrial World`, {
        equipment: EquipmentGenerator.GenerateGear()
      })
    ),
    new GeneratorOption(
      [90, 93], new CharacterDetail(`Bureaucrat`, {
        resources: { credits: d6() }
      })
    ),
    new GeneratorOption(
      [94, 97], new CharacterDetail(`Wasteland Nomads`, {
        effects: [{ points: 1, stat: CharacterStat.Reactions }],
        equipment: WeaponGenerator.GenerateLowTech()
      })
    ),
    new GeneratorOption(
      [97, 100], new CharacterDetail(`Alien Culture`, {
        equipment: WeaponGenerator.GenerateHighTech()
      })
    )
  );

  static MotivationTable = new Array<GeneratorOption<CharacterDetail>>(
    new GeneratorOption(
      [1, 8], new CharacterDetail(`Wealth`, {
        resources: { credits: d6() }
      })
    ),
    new GeneratorOption(
      [9, 14], new CharacterDetail(`Fame`, {
        resources: { storyPoints: 1 }
      })
    ),
    new GeneratorOption(
      [15, 19], new CharacterDetail(`Glory`, {
        effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
        equipment: WeaponGenerator.GenerateMilitary()
      })
    ),
    new GeneratorOption(
      [20, 26], new CharacterDetail(`Survival`, {
        effects: [{ points: 1, stat: CharacterStat.Toughness }]
      })
    ),
    new GeneratorOption(
      [27, 32], new CharacterDetail(`Escape`, {
        effects: [{ points: 1, stat: CharacterStat.Speed }]
      })
    ),
    new GeneratorOption(
      [33, 39], new CharacterDetail(`Adventure`, {
        resources: { credits: d6() },
        equipment: WeaponGenerator.GenerateLowTech()
      })
    ),
    new GeneratorOption(
      [40, 44], new CharacterDetail(`Truth`, {
        resources: {
          rumors: 1,
          storyPoints: 1
        }
      })
    ),
    new GeneratorOption(
      [45, 49], new CharacterDetail(`Technology`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        equipment: EquipmentGenerator.GenerateGadget()
      })
    ),
    new GeneratorOption(
      [50, 56], new CharacterDetail(`Discovery`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        equipment: EquipmentGenerator.GenerateGear()
      })
    ),
    new GeneratorOption(
      [57, 63], new CharacterDetail(`Loyalty`, {
        resources: { patron: true, storyPoints: 1 }
      })
    ),
    new GeneratorOption(
      [64, 69], new CharacterDetail(`Revenge`, {
        effects: [{ points: 2, stat: CharacterStat.XP }],
        resources: { rival: true }
      })
    ),
    new GeneratorOption(
      [70, 74], new CharacterDetail(`Romance`, {
        resources: { rumors: 1, storyPoints: 1 }
      })
    ),
    new GeneratorOption(
      [75, 79], new CharacterDetail(`Faith`, {
        resources: { rumors: 1, storyPoints: 1 }
      })
    ),
    new GeneratorOption(
      [80, 84], new CharacterDetail(`Political`, {
        resources: { patron: true, storyPoints: 1 }
      })
    ),
    new GeneratorOption(
      [85, 90], new CharacterDetail(`Power`, {
        effects: [{ points: 2, stat: CharacterStat.XP }],
        resources: { rival: true }
      })
    ),
    new GeneratorOption(
      [91, 95], new CharacterDetail(`Order`, {
        resources: { patron: true, storyPoints: 1 }
      })
    ),
    new GeneratorOption(
      [96, 100], new CharacterDetail(`Freedom`, {
        effects: [{ points: 2, stat: CharacterStat.XP }]
      })
    )
  );

  static ClassTable = new Array<GeneratorOption<CharacterDetail>>(
    new GeneratorOption(
      [1, 5], new CharacterDetail(`Working Class`, {
        effects: [
          { points: 1, stat: CharacterStat.Savvy },
          { points: 1, stat: CharacterStat.Luck }
        ]
      })
    ),
    new GeneratorOption(
      [6, 9], new CharacterDetail(`Technician`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        equipment: EquipmentGenerator.GenerateGear()
      })
    ),
    new GeneratorOption(
      [10, 13], new CharacterDetail(`Scientist`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        equipment: EquipmentGenerator.GenerateGadget()
      })
    ),
    new GeneratorOption(
      [14, 17], new CharacterDetail(`Hacker`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        resources: { rival: true }
      })
    ),
    new GeneratorOption(
      [18, 22], new CharacterDetail(`Soldier`, {
        effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
        resources: { credits: d6() }
      })
    ),
    new GeneratorOption(
      [23, 27], new CharacterDetail(`Mercenary`, {
        effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
        equipment: WeaponGenerator.GenerateMilitary()
      })
    ),
    new GeneratorOption(
      [28, 32], new CharacterDetail(`Agitator`, {
        resources: { rival: true }
      })
    ),
    new GeneratorOption(
      [33, 36], new CharacterDetail(`Primitive`, {
        effects: [{ points: 1, stat: CharacterStat.Speed }],
        equipment: WeaponGenerator.GenerateLowTech()
      })
    ),
    new GeneratorOption(
      [37, 40], new CharacterDetail(`Artist`, {
        resources: { credits: d6() }
      })
    ),
    new GeneratorOption(
      [41, 44], new CharacterDetail(`Negotiator`, {
        resources: { patron: true, storyPoints: 1 }
      })
    ),
    new GeneratorOption(
      [45, 49], new CharacterDetail(`Trader`, {
        resources: { credits: dice({ six: 2 }).total }
      })
    ),
    new GeneratorOption(
      [50, 54], new CharacterDetail(`Starship Crew`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }]
      })
    ),
    new GeneratorOption(
      [55, 58], new CharacterDetail(`Petty Criminal`, {
        effects: [{ points: 1, stat: CharacterStat.Speed }]
      })
    ),
    new GeneratorOption(
      [59, 63], new CharacterDetail(`Ganger`, {
        effects: [{ points: 1, stat: CharacterStat.Reactions }],
        equipment: WeaponGenerator.GenerateLowTech()
      })
    ),
    new GeneratorOption(
      [64, 67], new CharacterDetail(`Scoundrel`, {
        effects: [{ points: 1, stat: CharacterStat.Speed }]
      })
    ),
    new GeneratorOption(
      [68, 71], new CharacterDetail(`Enforcer`, {
        effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
        resources: { patron: true }
      })
    ),
    new GeneratorOption(
      [72, 75], new CharacterDetail(`Special Agent`, {
        effects: [{ points: 1, stat: CharacterStat.Reactions }],
        resources: { patron: true },
        equipment: EquipmentGenerator.GenerateGadget()
      })
    ),
    new GeneratorOption(
      [76, 79], new CharacterDetail(`Troubleshooter`, {
        effects: [{ points: 1, stat: CharacterStat.Reactions }],
        equipment: WeaponGenerator.GenerateLowTech()
      })
    ),
    new GeneratorOption(
      [80, 83], new CharacterDetail(`Bounty Hunter`, {
        effects: [{ points: 1, stat: CharacterStat.Speed }],
        resources: { rumors: 1 },
        equipment: WeaponGenerator.GenerateLowTech()
      })
    ),
    new GeneratorOption(
      [84, 88], new CharacterDetail(`Nomad`, {
        equipment: EquipmentGenerator.GenerateGear()
      })
    ),
    new GeneratorOption(
      [89, 92], new CharacterDetail(`Explorer`, {
        effects: [{ points: 2, stat: CharacterStat.XP }],
        equipment: EquipmentGenerator.GenerateGear()
      })
    ),
    new GeneratorOption(
      [93, 96], new CharacterDetail(`Punk`, {
        effects: [{ points: 2, stat: CharacterStat.XP }],
        resources: { rival: true }
      })
    ),
    new GeneratorOption(
      [97, 100], new CharacterDetail(`Scavenger`, {
        resources: { rumors: 1 },
        equipment: WeaponGenerator.GenerateHighTech()
      })
    )
  );
}
