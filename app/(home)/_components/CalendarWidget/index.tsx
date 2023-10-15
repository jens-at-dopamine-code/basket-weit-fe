import { isFuture, isToday } from 'date-fns';

import { styled } from '@/styled-system/jsx';

import { CalendarEntry } from './CalendarEntry';
import { gamesData } from './games.data';

const Container = styled('article', {
  base: {},
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

const next5Games = gamesData
  .filter(({ date }) => {
    const dateAsDate = new Date(date);
    return isToday(dateAsDate) || isFuture(dateAsDate);
  })
  .slice(0, 5);

export const CalendarWidget = () => {
  return (
    <Container>
      <Title>Komende Wedstrijden</Title>
      <CalendarList>
        {next5Games.map((item, index) => (
          <CalendarEntry key={item.date} {...item} isLast={index === 4} />
        ))}
      </CalendarList>
    </Container>
  );
};
