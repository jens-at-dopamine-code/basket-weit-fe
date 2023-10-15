import type { Team } from './team.type';

export type Game = {
  homeTeam: Team['id'];
  awayTeam: Team['id'];
  date: string;
  homeScore?: number;
  awayScore?: number;
};
