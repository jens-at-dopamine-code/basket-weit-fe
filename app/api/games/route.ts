import type { NextRequest } from 'next/server';

import { GAME_TYPES, TEAM_IDS } from '@/_constants';
import type { Game, Team } from '@/_types';

import type { GetGamesRowReturn } from './_get-games-row.type';
import { getGames } from './_getGames';

type GetGamesRowReturnKey = keyof GetGamesRowReturn;
type GameType = Game['gameType'];

const gamesRow: GetGamesRowReturnKey[] = [
  'away_team_id' as GetGamesRowReturnKey,
  'away_team_name' as GetGamesRowReturnKey,
  'away_team_score' as GetGamesRowReturnKey,
  'date' as GetGamesRowReturnKey,
  'game_id' as GetGamesRowReturnKey,
  'game_type' as GetGamesRowReturnKey,
  'home_team_id' as GetGamesRowReturnKey,
  'home_team_name' as GetGamesRowReturnKey,
  'home_team_score' as GetGamesRowReturnKey,
];

const getForTeams = (forTeamsRaw: string[]) =>
  forTeamsRaw.reduce(
    (forTeams, teamIdString) => {
      const teamId = +teamIdString as Team['id'];
      if (TEAM_IDS.includes(teamId)) {
        forTeams.push(teamId);
      }
      return forTeams;
    },
    [] as Team['id'][],
  );

const getOrderBy = (rawOrderBy: string | null) =>
  gamesRow.includes(rawOrderBy as GetGamesRowReturnKey)
    ? (rawOrderBy as GetGamesRowReturnKey)
    : null;

const getGameTypes = (rawTypes: string[]) =>
  rawTypes.filter((gameType) =>
    GAME_TYPES.includes(gameType as GameType),
  ) as GameType[];

export async function GET({ nextUrl: { searchParams } }: NextRequest) {
  const forTeams = getForTeams(searchParams.getAll('forTeams'));
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');
  const orderBy = getOrderBy(searchParams.get('orderBy'));
  const startDate = searchParams.get('startDate');
  const types = getGameTypes(searchParams.getAll('types'));

  const data = await getGames({
    ...(forTeams.length && { forTeams }),
    ...(limit && { limit: +limit }),
    ...(offset && { offset: +offset }),
    ...(orderBy && { orderBy }),
    ...(startDate && { startDate: new Date(startDate) }),
    ...(types.length && { types }),
  });
  return Response.json({ data });
}
