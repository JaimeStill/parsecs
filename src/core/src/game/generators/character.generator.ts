import {
  d100,
  Generator,
  GeneratorOption
} from '../core';

import {
  Backgrounds,
  Characters,
  Classes,
  Motivations
} from '../data/character.data';

import {
  CharacterRace,
  CharacterSpecies,
  CharacterStat
} from '../enums';

import { CampaignResource } from '../models/campaign/campaign-resource';

import {
  Character,
  CharacterDetail
} from '../models/character';

export abstract class CharacterGenerator {
  private static savvyUpgraded = (details: CharacterDetail[]) =>
    details
      .some(d =>
        d.effects
        && d.effects.some(e => e.points > 0 && e.stat === CharacterStat.Savvy)
      );

  static GenerateRoster = (size: number): Character[] => {
    const roster = new Array<Character>();

    for (var i = 0; i < size; i++)
      roster.push(this.GenerateCharacter())

    return roster;
  }

  static DevelopCharacter = (character: Character): { resources: CampaignResource, savvyUpgraded: boolean } => {
    if (character.race === CharacterRace.Bot) {
      character.background = 'NULL_REFERENCE_EXCEPTION';
      character.motivation = 'ROBOTS_ARE_NOT_SENTIENT';
      character.charClass = 'ASSIGNED_FUNCTIONALITY';

      return { resources: new CampaignResource(), savvyUpgraded: false };
    } else {
      const details = [
        this.DevelopBackground(character),
        this.DevelopMotivation(character),
        this.DevelopClass(character)
      ]

      const resources = new CampaignResource();
      resources.consolidate(details.map(d => d.resources));

      let savvyUpgraded: boolean;

      switch (character.species) {
        case CharacterSpecies.DeConverted:
          savvyUpgraded = false;
          break;
        case CharacterSpecies.MinorAlien:
          if (resources.credits)
            resources.credits -= 1;
          if (resources.storyPoints)
            resources.storyPoints -= 1;

          savvyUpgraded = this.savvyUpgraded(details);
          break;
        case CharacterSpecies.Traveler:
          resources.storyPoints = (resources.storyPoints ?? 0) + 2;
          resources.rumors = (resources.rumors ?? 0) + 2;

          savvyUpgraded = this.savvyUpgraded(details);
          break;
        default:
          savvyUpgraded = this.savvyUpgraded(details);
          break;
      }

      return {
        resources,
        savvyUpgraded
      };
    }
  }

  static DevelopBackground = (character: Character): CharacterDetail => {
    let b: CharacterDetail;

    switch (character.species) {
      case CharacterSpecies.MysteriousPast:
        b = this.GenerateBackground();
        b.merge(this.GenerateBackground());

        if (b.resources?.storyPoints)
          b.resources.storyPoints = 0;

        break;
      case CharacterSpecies.Mutant:
        b = Backgrounds.LowerMegacityClass();
        break;
      case CharacterSpecies.Manipulator:
        b = Backgrounds.Bureaucrat();
        break;
      case CharacterSpecies.Primitive:
        b = Backgrounds.PrimitiveOrRegressedWorld();
        break;
      case CharacterSpecies.BioUpgrade:
        b = this.GenerateBackground();
        if (b.resources?.credits)
          b.resources.credits >= 2
            ? b.resources.credits -= 2
            : b.resources.credits = 0;
        break;
      default:
        b = this.GenerateBackground();
        break;
    }

    character.background = b.detail;
    character.applyDetail(b);

    return b;
  }

  static DevelopMotivation = (character: Character): CharacterDetail => {
    let m: CharacterDetail;

    switch (character.species) {
      case CharacterSpecies.DeConverted:
        m = Motivations.Revenge();
        break;
      case CharacterSpecies.UnityAgent:
        m = Motivations.Order();
        break;
      case CharacterSpecies.MysteriousPast:
        m = this.GenerateMotivation();
        if (m.resources?.storyPoints)
          m.resources.storyPoints = 0;
        break;
      case CharacterSpecies.Feeler:
        m = this.GenerateMotivation();
        m.merge(this.GenerateMotivation());
        break;
      case CharacterSpecies.EmoSuppressed:
        m = Motivations.Survival();
        break;
      case CharacterSpecies.Traveler:
        m = Motivations.Truth();
        break;
      default:
        m = this.GenerateMotivation();
    }

    character.motivation = m.detail;
    character.applyDetail(m);

    return m;
  }

  static DevelopClass = (character: Character): CharacterDetail => {
    let c: CharacterDetail;

    switch (character.species) {
      case CharacterSpecies.MysteriousPast:
        c = this.GenerateClass();
        if (c.resources?.storyPoints)
          c.resources.storyPoints = 0;

        break;
      case CharacterSpecies.Hulker:
        c = this.GenerateClass();

        switch (c.detail) {
          case "Technician":
          case "Scientist":
          case "Hacker":
            c = Classes.Primitive();
        }

        break;
      default:
        c = this.GenerateClass();
        break;
    }

    character.charClass = c.detail;
    character.applyDetail(c);

    return c;
  }

  static GenerateCharacter = (): Character =>
    Generator(d100, [
      new GeneratorOption(
        [1, 60], Characters.Human()
      ),
      new GeneratorOption(
        [61, 80], this.GenerateAlien()
      ),
      new GeneratorOption(
        [81, 90], Characters.Bot()
      ),
      new GeneratorOption(
        [91, 100], this.GenerateStrange()
      )
    ]);

  static GenerateAlien = (): Character =>
    Generator(d100, [
      new GeneratorOption(
        [1, 20], Characters.Engineer()
      ),
      new GeneratorOption(
        [21, 40], Characters.KErin()
      ),
      new GeneratorOption(
        [41, 55], Characters.Soulless()
      ),
      new GeneratorOption(
        [56, 70], Characters.Precursor()
      ),
      new GeneratorOption(
        [71, 90], Characters.Feral()
      ),
      new GeneratorOption(
        [91, 100], Characters.Swift()
      )
    ]);

  static GenerateStrange = (): Character =>
    Generator(d100, [
      new GeneratorOption(
        [1, 2], Characters.DeConverted()
      ),
      new GeneratorOption(
        [3, 8], Characters.UnityAgent()
      ),
      new GeneratorOption(
        [9, 17], Characters.MysteriousPast()
      ),
      new GeneratorOption(
        [18, 22], Characters.Hakshan()
      ),
      new GeneratorOption(
        [23, 27], Characters.Stalker()
      ),
      new GeneratorOption(
        [28, 34], Characters.Hulker()
      ),
      new GeneratorOption(
        [35, 41], Characters.HopefulRookie()
      ),
      new GeneratorOption(
        [42, 47], Characters.GeneticUplift()
      ),
      new GeneratorOption(
        [48, 53], Characters.Mutant()
      ),
      new GeneratorOption(
        [54, 58], Characters.AssaultBot()
      ),
      new GeneratorOption(
        [59, 62], Characters.Manipulator()
      ),
      new GeneratorOption(
        [63, 67], Characters.Primitive()
      ),
      new GeneratorOption(
        [68, 73], Characters.Feeler()
      ),
      new GeneratorOption(
        [74, 79], Characters.EmoSuppressed()
      ),
      new GeneratorOption(
        [80, 85], Characters.MinorAlien()
      ),
      new GeneratorOption(
        [86, 87], Characters.Traveler()
      ),
      new GeneratorOption(
        [88, 93], Characters.Empath()
      ),
      new GeneratorOption(
        [94, 100], Characters.BioUpgrade()
      )
    ]);

  static GenerateBackground = (): CharacterDetail =>
    Generator(d100, [
      new GeneratorOption(
        [1, 4], Backgrounds.PeacefulHighTechColony()
      ),
      new GeneratorOption(
        [5, 9], Backgrounds.GiantOvercrowdedDystopianCity()
      ),
      new GeneratorOption(
        [10, 13], Backgrounds.LowTechColony()
      ),
      new GeneratorOption(
        [14, 17], Backgrounds.MiningColony()
      ),
      new GeneratorOption(
        [18, 21], Backgrounds.MilitaryBrat()
      ),
      new GeneratorOption(
        [22, 25], Backgrounds.SpaceStation()
      ),
      new GeneratorOption(
        [26, 29], Backgrounds.MilitaryOutpost()
      ),
      new GeneratorOption(
        [30, 34], Backgrounds.Drifter()
      ),
      new GeneratorOption(
        [35, 39], Backgrounds.LowerMegacityClass()
      ),
      new GeneratorOption(
        [40, 42], Backgrounds.WealthyMerchantFamily()
      ),
      new GeneratorOption(
        [43, 46], Backgrounds.FrontierGang()
      ),
      new GeneratorOption(
        [47, 49], Backgrounds.ReligiousCult()
      ),
      new GeneratorOption(
        [50, 52], Backgrounds.WarTornHellHole()
      ),
      new GeneratorOption(
        [53, 55], Backgrounds.TechGuild()
      ),
      new GeneratorOption(
        [56, 59], Backgrounds.SubjugatedColonyOnAlienWorld()
      ),
      new GeneratorOption(
        [60, 64], Backgrounds.LongTermSpaceMission()
      ),
      new GeneratorOption(
        [65, 68], Backgrounds.ResearchOutpost()
      ),
      new GeneratorOption(
        [69, 72], Backgrounds.PrimitiveOrRegressedWorld()
      ),
      new GeneratorOption(
        [73, 76], Backgrounds.OrphanUtilityProgram()
      ),
      new GeneratorOption(
        [77, 80], Backgrounds.IsolationistEnclave()
      ),
      new GeneratorOption(
        [81, 84], Backgrounds.ComfortableMegacityClass()
      ),
      new GeneratorOption(
        [85, 89], Backgrounds.IndustrialWorld()
      ),
      new GeneratorOption(
        [90, 93], Backgrounds.Bureaucrat()
      ),
      new GeneratorOption(
        [94, 97], Backgrounds.WastelandNomads()
      ),
      new GeneratorOption(
        [97, 100], Backgrounds.AlienCulture()
      )
    ]);

  static GenerateMotivation = (): CharacterDetail =>
    Generator(d100, [
      new GeneratorOption(
        [1, 8], Motivations.Wealth()
      ),
      new GeneratorOption(
        [9, 14], Motivations.Fame()
      ),
      new GeneratorOption(
        [15, 19], Motivations.Glory()
      ),
      new GeneratorOption(
        [20, 26], Motivations.Survival()
      ),
      new GeneratorOption(
        [27, 32], Motivations.Escape()
      ),
      new GeneratorOption(
        [33, 39], Motivations.Adventure()
      ),
      new GeneratorOption(
        [40, 44], Motivations.Truth()
      ),
      new GeneratorOption(
        [45, 49], Motivations.Technology()
      ),
      new GeneratorOption(
        [50, 56], Motivations.Discovery()
      ),
      new GeneratorOption(
        [57, 63], Motivations.Loyalty()
      ),
      new GeneratorOption(
        [64, 69], Motivations.Revenge()
      ),
      new GeneratorOption(
        [70, 74], Motivations.Romance()
      ),
      new GeneratorOption(
        [75, 79], Motivations.Faith()
      ),
      new GeneratorOption(
        [80, 84], Motivations.Political()
      ),
      new GeneratorOption(
        [85, 90], Motivations.Power()
      ),
      new GeneratorOption(
        [91, 95], Motivations.Order()
      ),
      new GeneratorOption(
        [96, 100], Motivations.Freedom()
      )
    ]);

  static GenerateClass = (): CharacterDetail =>
    Generator(d100, [
      new GeneratorOption(
        [1, 5], Classes.WorkingClass()
      ),
      new GeneratorOption(
        [6, 9], Classes.Technician()
      ),
      new GeneratorOption(
        [10, 13], Classes.Scientist()
      ),
      new GeneratorOption(
        [14, 17], Classes.Hacker()
      ),
      new GeneratorOption(
        [18, 22], Classes.Soldier()
      ),
      new GeneratorOption(
        [23, 27], Classes.Mercenary()
      ),
      new GeneratorOption(
        [28, 32], Classes.Agitator()
      ),
      new GeneratorOption(
        [33, 36], Classes.Primitive()
      ),
      new GeneratorOption(
        [37, 40], Classes.Artist()
      ),
      new GeneratorOption(
        [41, 44], Classes.Negotiator()
      ),
      new GeneratorOption(
        [45, 49], Classes.Trader()
      ),
      new GeneratorOption(
        [50, 54], Classes.StarshipCrew()
      ),
      new GeneratorOption(
        [55, 58], Classes.PettyCriminal()
      ),
      new GeneratorOption(
        [59, 63], Classes.Ganger()
      ),
      new GeneratorOption(
        [64, 67], Classes.Scoundrel()
      ),
      new GeneratorOption(
        [68, 71], Classes.Enforcer()
      ),
      new GeneratorOption(
        [72, 75], Classes.SpecialAgent()
      ),
      new GeneratorOption(
        [76, 79], Classes.Troubleshooter()
      ),
      new GeneratorOption(
        [80, 83], Classes.BountyHunter()
      ),
      new GeneratorOption(
        [84, 88], Classes.Nomad()
      ),
      new GeneratorOption(
        [89, 92], Classes.Explorer()
      ),
      new GeneratorOption(
        [93, 96], Classes.Punk()
      ),
      new GeneratorOption(
        [97, 100], Classes.Scavenger()
      )
    ]);
}
