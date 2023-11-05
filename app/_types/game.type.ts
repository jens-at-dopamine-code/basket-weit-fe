import type { Team } from './team.type';

export type Game = {
  id: number;
  awayTeamId: Team['id'];
  awayTeamName: Team['name'];
  awayTeamScore?: number;
  date: string;
  gameType: 'competition' | 'cup';
  homeTeamId: Team['id'];
  homeTeamName: Team['name'];
  homeTeamScore?: number;
};
