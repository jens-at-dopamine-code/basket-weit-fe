import { sub } from 'date-fns';

import { BASKET_WEIT_ID } from '@/_constants';
import { getGames } from '@/_data';
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

export const CalendarWidget = async () => {
  const games = await getGames({
    forTeams: [BASKET_WEIT_ID],
    limit: 5,
    startDate: sub(new Date(), { days: 1 }),
  });

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
