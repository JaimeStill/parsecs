import { KeyValue } from '../core';
import { VictoryCondition } from '../models';

import {
  Difficulty,
  VictoryType
} from '../enums';

const EASY: string[] = [
  `After every battle, select a crew member to receive +1 XP.`,
  `Increase post-battle rewards by +1 credit.`,
  `When setting up a tabletop battle, if you would face 5+ opponents, remove one Basic enemy.`,
  `Only the Play 20 campaign turns and Win 20 tabletop battles Victory Conditions can be completed in the Easy difficulty mode.`
]

const CHALLENGING: string[] = [
  `When rolling to determine enemy numbers faced in battle, count any die rolling a 1 or 2 as a 3.`
]

const HARDCORE: string[] = [
  ...CHALLENGING,
  `Add an additional Basic enemy to every battle.`,
  `Add +2 to all Invasion rolls.`,
  `Add a -2 penalty to all Seize the Initiative rolls.`,
  `Add +1 when rolling for Unique Individuals.`,
  `Begin the campaign wiht one less story point`
]

const INSANITY: string[] = [
  ...HARDCORE,
  `Add an additional Specialist enemy to every battle.`,
  `Add +3 to all Invasion rolls.`,
  `Apply a -3 penalty to all Seize the Initiative rolls.`,
  `The opposing side always includes a Unique Individual, even for Roving Threats.`,
  `Roll 2d6. On all 11-12, they include two Unique Individuals.`,
  `Receive no 'Stars of the Story' options.`,
  `Receive no story points. If any item or event would grant them, it has no effect and the item or event is not re-rolled.`
]

export const DifficultyDescription = (difficulty: Difficulty): string[] => {
  switch (difficulty) {
    case Difficulty.Easy:
      return EASY;
    case Difficulty.Challenging:
      return CHALLENGING;
    case Difficulty.Hardcore:
      return HARDCORE;
    case Difficulty.Insanity:
      return INSANITY;
    default:
      return [`No changes to game mechanics. All rules apply as written.`]
  }
}

const ALL_DIFFICULTIES: Difficulty[] = [
  Difficulty.Easy,
  Difficulty.Normal,
  Difficulty.Challenging,
  Difficulty.Hardcore,
  Difficulty.Insanity
]

export const VictoryConditions: KeyValue<VictoryCondition>[] = [
  new KeyValue(
    'Play 20 Campaign Turns',
    new VictoryCondition(
      20, VictoryType.CampaignTurns, ALL_DIFFICULTIES
    )
  ),
  new KeyValue(
    `Play 50 Campaign Turns`,
    new VictoryCondition(
      50, VictoryType.CampaignTurns
    )
  ),
  new KeyValue(
    `Play 100 Campaign Turns`,
    new VictoryCondition(
      100, VictoryType.CampaignTurns
    )
  ),
  new KeyValue(
    `Complete 3 Quests`,
    new VictoryCondition(
      3, VictoryType.Quests
    )
  ),
  new KeyValue(
    `Complete 5 Quests`,
    new VictoryCondition(
      5, VictoryType.Quests
    )
  ),
  new KeyValue(
    `Complete 10 Quests`,
    new VictoryCondition(
      10, VictoryType.Quests
    )
  ),
  new KeyValue(
    `Win 20 Tabletop Battles`,
    new VictoryCondition(
      20, VictoryType.TabletopBattles, ALL_DIFFICULTIES
    )
  ),
  new KeyValue(
    `Win 50 Tabletop Battles`,
    new VictoryCondition(
      50, VictoryType.TabletopBattles
    )
  ),
  new KeyValue(
    `Win 100 Tabletop Battles`,
    new VictoryCondition(
      100, VictoryType.TabletopBattles
    )
  ),
  new KeyValue(
    `Kill 10 Unique Individuals`,
    new VictoryCondition(
      10, VictoryType.UniqueIndividuals
    )
  ),
  new KeyValue(
    `Kill 25 Unique Individuals`,
    new VictoryCondition(
      25, VictoryType.UniqueIndividuals
    )
  ),
  new KeyValue(
    `Upgrade a Single Character 10 Times`,
    new VictoryCondition(
      1, VictoryType.UpgradeCharacters
    )
  ),
  new KeyValue(
    `Upgrade 3 Characters 10 Times`,
    new VictoryCondition(
      3, VictoryType.UpgradeCharacters
    )
  ),
  new KeyValue(
    `Upgrade 5 Characters 10 Times`,
    new VictoryCondition(
      5, VictoryType.UpgradeCharacters
    )
  ),
  new KeyValue(
    `Play 50 Campaign Turns in Challenging Mode`,
    new VictoryCondition(
      50, VictoryType.ChallengingCampaignTurns, [ Difficulty.Challenging ]
    )
  ),
  new KeyValue(
    `Play 50 Campaign Turns in Hardcore Mode`,
    new VictoryCondition(
      50, VictoryType.HardcoreCampaignTurns, [ Difficulty.Hardcore ]
    )
  ),
  new KeyValue(
    `Play 50 Campaign Turns in Insanity Mode`,
    new VictoryCondition(
      50, VictoryType.InsanityCampaignTurns, [ Difficulty.Insanity ]
    )
  )
]

export const AvailableVictoryConditions = (difficulty: Difficulty) =>
  VictoryConditions
    .filter((vc: KeyValue<VictoryCondition>) =>
      vc.value.difficulties.includes(difficulty)
    );
