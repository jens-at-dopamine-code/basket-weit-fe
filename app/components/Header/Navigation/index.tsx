import { ModuleRoute } from '@/enumerations';
import { styled } from '@/styled-system/jsx';

import { NavigationItem } from './NavigationItem';

const List = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    bg: 'primary',
  },
});

export const Navigation = () => {
  return (
    <nav>
      <List>
        <NavigationItem uri={ModuleRoute.HOME}>Home</NavigationItem>
        <NavigationItem uri={ModuleRoute.SCHEDULE}>Schedule</NavigationItem>
        <NavigationItem uri={ModuleRoute.GAMES}>Games</NavigationItem>
        <NavigationItem uri={ModuleRoute.TEAMS}>Teams</NavigationItem>
        <NavigationItem uri={ModuleRoute.STANDINGS}>Standings</NavigationItem>
        <NavigationItem uri={ModuleRoute.EVENTS}>Events</NavigationItem>
        <NavigationItem uri={ModuleRoute.NEWS}>News</NavigationItem>
      </List>
    </nav>
  );
};
