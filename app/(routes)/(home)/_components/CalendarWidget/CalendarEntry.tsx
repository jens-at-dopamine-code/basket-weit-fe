import React from 'react';

import { Icon } from '@/_components';
import { BASKET_WEIT_ID } from '@/_constants';
import type { Game } from '@/_types';
import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

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
  awayTeamName,
  date,
  gameType,
  homeTeamId,
  homeTeamName,
  isLast = false,
}: CalendarEntryProps) => {
  const description =
    homeTeamId === BASKET_WEIT_ID ? `VS ${awayTeamName}` : `@ ${homeTeamName}`;
  const when = new Date(date).toLocaleDateString('nl-BE', dateFormatOptions);
  const iconName = gameType === 'cup' ? 'HiOutlineTrophy' : 'HiOutlineCalendar';

  return (
    <Container {...(isLast && { visual: 'isLast' })}>
      <DateTime>
        <Icon iconName={iconName} className={iconStyles()} />
        {when}
      </DateTime>
      {description}
    </Container>
  );
};
