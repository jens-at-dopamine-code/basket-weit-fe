import { ModuleRoute } from '@/_enumerations';
import { styled } from '@/styled-system/jsx';

import { NavigationItem } from './NavigationItem';

const Nav = styled('nav', {
  base: {
    ml: 4,
  },
});

const List = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
  },
});

export const Navigation = () => {
  return (
    <Nav>
      <List>
        <NavigationItem uri={ModuleRoute.HOME}>Home</NavigationItem>
        <NavigationItem uri={ModuleRoute.SCHEDULE}>Schedule</NavigationItem>
        <NavigationItem uri={ModuleRoute.GAMES}>Games</NavigationItem>
        <NavigationItem uri={ModuleRoute.TEAMS}>Teams</NavigationItem>
        <NavigationItem uri={ModuleRoute.STANDINGS}>Standings</NavigationItem>
        <NavigationItem uri={ModuleRoute.EVENTS}>Events</NavigationItem>
        <NavigationItem uri={ModuleRoute.NEWS}>News</NavigationItem>
      </List>
    </Nav>
  );
};
