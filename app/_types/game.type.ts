import type { Team } from './team.type';

export type Game = {
  awayTeamId: Team['id'];
  awayTeamName: Team['name'];
  date: string;
  gameType: 'competition' | 'cup';
  homeTeamId: Team['id'];
  homeTeamName: Team['name'];
  id: number;
  series: string;
  awayTeamScore?: number;
  homeTeamScore?: number;
};
