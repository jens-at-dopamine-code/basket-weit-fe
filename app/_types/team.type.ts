type TeamId =
  | 5299
  | 5288
  | 5245
  | 5287
  | 5323
  | 5030
  | 5315
  | 5158
  | 5260
  | 5207
  | 5228
  | 5324;

export type Team = {
  id: TeamId;
  name: string;
  court: string;
  address: string;
  series: string;
};
