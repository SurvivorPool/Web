export const teamColors = {
  [`ARI`]: "#97233F",
  [`ATL`]: "#A71930",
  [`BAL`]: "#241773",
  [`BUF`]: "#C60C30",
  [`CAR`]: "#0085CA",
  [`CHI`]: "#0B162A",
  [`CIN`]: "#FB4F14",
  [`CLE`]: "#311D00",
  [`DAL`]: "#003594",
  [`DEN`]: "#FB4F14",
  [`DET`]: "#0076B6",
  [`GB`]: "#203731",
  [`HOU`]: "#A71930",
  [`IND`]: "#A2AAAD",
  [`JAX`]: "#006778",
  [`KC`]: "#E31837",
  [`LAC`]: "#FFC20E",
  [`LAR`]: "#024",
  [`LV`]: "#A5ACAF",
  [`MIA`]: "#008E97",
  [`MIN`]: "#4F2683",
  [`NE`]: "#B0B7BC",
  [`NO`]: "#D3BC8D",
  [`NYG`]: "#0B2265",
  [`NYJ`]: "#003F2D",
  [`PHI`]: "#004C54",
  [`PIT`]: "#A5ACAF",
  [`SF`]: "#AA0000",
  [`SEA`]: "#69BE28",
  [`TB`]: "#D50A0A",
  [`TEN`]: "#4495D1",
  [`WSH`]: "#773141",
};

export const getTeamColor = (abbreviation: string): string => {
  return (teamColors as Record<string, string>)[abbreviation];
};
