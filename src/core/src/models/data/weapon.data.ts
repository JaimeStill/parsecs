import {
  WeaponMod,
  WeaponSight
} from '../equipment';

export const WeaponMods = {
  AssaultBlade: new WeaponMod(
    `Assault Blade`,
    `The weapon gains the Melee trait. Damage +1, and wins combat on a Draw.`,
    false
  ),
  BeamLight: new WeaponMod(
    `Beam Light`,
    `When using the weapon in conditions of reduced visibility, increase visibility by +3".`,
    true
  ),
  Bipod: new WeaponMod(
    `Bipod`,
    `The weapon recieve +1 to Hit at ranges over 8" when Aiming or when firing from Cover.`,
    false
  ),
  HotShotPack: new WeaponMod(
    `Hot Shot Pack`,
    `If fittedto a Blast Pistol, Blast Rifle, Hand Laser, or Infantry Laser, +1 Damage. Any natural 6 on the shooting dice causes an overheat, rendering the weapon inoperable for the rest of the fight.`,
    true
  ),
  CyberConfigurableNanoSludge: new WeaponMod(
    `Cyber-configurable Nano-sludge`,
    `The weapon receives a permanent +1 Hit bonus.`,
    true
  ),
  Stabilizer: new WeaponMod(
    `Stabilizer`,
    `Weapon may ignore Heavy trait.`,
    true
  ),
  ShockAttachment: new WeaponMod(
    `Shock Attachment`,
    `The weapon receives the Impact trait against targets within 8".`,
    true
  ),
  UpgradeKit: new WeaponMod(
    `Upgrade Kit`,
    `+2" Range increase.`,
    true
  )
}

export const WeaponSights = {
  LaserSight: new WeaponSight(
    `Laser Sight`,
    `The weapon receives thet Snap Shot trait.`,
    true
  ),
  QualitySight: new WeaponSight(
    `Quality Sight`,
    `+2" Range increase. Reroll 1s when firing only 1 shot.`,
    false
  ),
  SeekerSight: new WeaponSight(
    `Seeker Sight`,
    `The weapon receives a +1 to Hit if the shooter did not Move this round.`,
    false
  ),
  TrackerSight: new WeaponSight(
    `Tracker Sight`,
    `+1 to Hit if you fired at the same target during your previous round.`,
    false
  ),
  UnityBattleSight: new WeaponSight(
    `Unity Battle Sight`,
    `+1 to all Hit rolls.`,
    false
  )
}

export const WeaponModList = [
  WeaponMods.AssaultBlade,
  WeaponMods.BeamLight,
  WeaponMods.Bipod,
  WeaponMods.CyberConfigurableNanoSludge,
  WeaponMods.HotShotPack,
  WeaponMods.ShockAttachment,
  WeaponMods.Stabilizer,
  WeaponMods.ShockAttachment,
  WeaponMods.UpgradeKit
];

export const WeaponSightList = [
  WeaponSights.LaserSight,
  WeaponSights.QualitySight,
  WeaponSights.SeekerSight,
  WeaponSights.TrackerSight,
  WeaponSights.UnityBattleSight
]

