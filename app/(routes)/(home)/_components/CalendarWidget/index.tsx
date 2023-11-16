import { sub } from 'date-fns';

import { BASKET_WEIT_ID } from '@/_constants';
import type { Game } from '@/_types';
import { styled } from '@/styled-system/jsx';

import { CalendarEntry } from './CalendarEntry';

const Container = styled('article', {
  base: {
    flexGrow: 1,
  },
});

const Title = styled('h2', {
  base: {
    color: 'primary',
    fontWeight: 800,
    fontSize: '2xl',
    mb: 2,
  },
});

const CalendarList = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const getGames = async (): Promise<Game[]> => {
  const url = new URL(`${process.env.API_URL}/games`);
  url.searchParams.append('forTeams', `${BASKET_WEIT_ID}`);
  url.searchParams.append('limit', '5');
  url.searchParams.append(
    'startDate',
    sub(new Date(), { days: 1 }).toISOString(),
  );

  const result = await fetch(url, {
    next: { revalidate: 3600, tags: ['getGames'] },
  });
  if (!result.ok) {
    return [];
  }
  const { data } = await result.json();
  return data;
};

export const CalendarWidget = async () => {
  const games = await getGames();

  return (
    <Container>
      <Title>Komende Wedstrijden</Title>
      <CalendarList>
        {games.map((item, index) => (
          <CalendarEntry key={item.date} {...item} isLast={index === 4} />
        ))}
      </CalendarList>
    </Container>
  );
};
