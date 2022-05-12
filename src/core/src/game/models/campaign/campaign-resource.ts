export class CampaignResource {
  credits: number;
  storyPoints: number;
  rumors: number;
  patrons: number;
  rivals: number;

  constructor({
    credits = 0,
    storyPoints = 0,
    rumors = 0,
    patrons = 0,
    rivals = 0
  } = {}) {
    this.credits = credits;
    this.storyPoints = storyPoints;
    this.rumors = rumors;
    this.patrons = patrons;
    this.rivals = rivals;
  }

  consolidate = (resources: CampaignResource[]) =>
    resources.forEach(r => {
      this.credits += r.credits;
      this.patrons += r.patrons;
      this.rivals += r.rivals;
      this.rumors += r.rumors;
      this.storyPoints += r.storyPoints;
    });

  static Restore = (val: any) =>
    new CampaignResource({
      credits: val.credits,
      storyPoints: val.storyPoints,
      rumors: val.rumors,
      patrons: val.patrons,
      rivals: val.rivals
    });
}
