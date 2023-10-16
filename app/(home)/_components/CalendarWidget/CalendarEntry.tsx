import React from 'react';

import { FeatherIcon } from '@/_components';
import { BASKET_WEIT_ID } from '@/_constants';
import type { Game } from '@/_types';
import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

import { teamsDataById } from './teams.data';

type CalendarEntryProps = Game & {
  isLast?: boolean;
};

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Europe/Brussels',
};

const Container = styled(
  'div',
  cva({
    base: {
      borderBottom: '1px solid #E0D3D3',
      p: 2,
    },
    variants: {
      visual: {
        isLast: {
          borderBottom: 'none',
        },
      },
    },
  }),
);

const DateTime = styled('p', {
  base: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    w: '100%',
  },
});

const iconStyles = cva({
  base: {
    mr: 2,
  },
});

export const CalendarEntry = ({
  homeTeam,
  awayTeam,
  date,
  isLast = false,
}: CalendarEntryProps) => {
  const { name: homeTeamName } = teamsDataById[homeTeam];
  const { name: awayTeamName } = teamsDataById[awayTeam];
  const isHomeGame = homeTeam === BASKET_WEIT_ID;
  const opponent = isHomeGame ? awayTeamName : homeTeamName;
  const locationAbbreviation = isHomeGame ? 'VS' : '@';
  const when = new Date(date);
  return (
    <Container {...(isLast && { visual: 'isLast' })}>
      <DateTime>
        <FeatherIcon iconName="FiCalendar" className={iconStyles()} />
        {when.toLocaleDateString('nl-BE', dateFormatOptions)}
      </DateTime>
      {`${locationAbbreviation} ${opponent}`}
    </Container>
  );
};
