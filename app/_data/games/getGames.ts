import { db } from '@vercel/postgres';

import type { Game, Team } from '@/_types';
import { getErrorMessage } from '@/_utils';

import type { GetGamesRow } from './get-games-row.type';

const TEAM_IDS: Team['id'][] = [
  5299, 5288, 5245, 5287, 5323, 5030, 5315, 5158, 5260, 5207, 5228, 5324,
];

const GAME_TYPES: Game['gameType'][] = ['competition', 'cup'];

type GetGamesFilters = {
  forTeams?: typeof TEAM_IDS;
  limit?: number;
  offset?: number;
  orderBy?: keyof GetGamesRow;
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
    $4
LIMIT $5 OFFSET $6;
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
}: GetGamesRow): Game => ({
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
  orderBy = 'date',
  startDate = new Date(0),
  types = GAME_TYPES,
}: GetGamesFilters = {}): Promise<Game[]> => {
  try {
    const client = await db.connect();
    const values = [
      forTeams,
      startDate.toISOString(),
      types,
      orderBy,
      limit,
      offset,
    ];
    const { rows } = await client.query<GetGamesRow>(rawQuery, values);
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
