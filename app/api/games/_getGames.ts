import { db } from '@vercel/postgres';

import { GAME_TYPES, TEAM_IDS } from '@/_constants';
import type { Game, Team } from '@/_types';
import { getErrorMessage } from '@/_utils';

import type { GetGamesRowReturn } from './_get-games-row.type';

type GetGamesFilters = {
  forTeams?: typeof TEAM_IDS;
  limit?: number;
  offset?: number;
  orderBy?: keyof GetGamesRowReturn;
  startDate?: Date;
  types?: Game['gameType'][];
};

const rawQuery = `
SELECT
    g.*,
    t.name AS home_team_name,
    t2.name AS away_team_name
FROM
    games g
    LEFT JOIN teams t ON g.home_team_id = t.team_id
    LEFT JOIN teams t2 ON g.away_team_id = t2.team_id
WHERE (g.home_team_id = ANY ($1)
    OR g.away_team_id = ANY ($1))
AND g.date::date > $2
AND g.game_type = ANY ($3)
ORDER BY
  g.date
LIMIT $4 OFFSET $5;
`;

const mapRowToGame = ({
  away_team_id,
  away_team_name,
  away_team_score,
  date,
  game_id,
  game_type,
  home_team_id,
  home_team_name,
  home_team_score,
}: GetGamesRowReturn): Game => ({
  awayTeamId: away_team_id as Team['id'],
  awayTeamName: away_team_name,
  date,
  gameType: game_type as Game['gameType'],
  homeTeamId: home_team_id as Team['id'],
  homeTeamName: home_team_name,
  id: game_id,
  awayTeamScore: away_team_score,
  homeTeamScore: home_team_score,
});

export const getGames = async ({
  forTeams = TEAM_IDS,
  limit = 100,
  offset = 0,
  startDate = new Date(0),
  types = GAME_TYPES,
}: GetGamesFilters = {}): Promise<Game[]> => {
  try {
    const client = await db.connect();
    const values = [forTeams, startDate.toISOString(), types, limit, offset];
    const { rows } = await client.query<GetGamesRowReturn>(rawQuery, values);
    return rows.map(mapRowToGame);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(
      getErrorMessage(
        error,
        'Something went wrong while retrieving the games.',
      ),
    );
    return [];
  }
};
