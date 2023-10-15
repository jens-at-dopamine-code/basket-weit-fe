import { styled } from '@/styled-system/jsx';

import { About, CalendarWidget } from './_components';

const Main = styled('main', {
  base: {
    display: 'grid',
    gridTemplateColumns: { sm: '1', md: '1', lg: '3fr 2fr' },
    gap: 4,
  },
});

const Home = () => {
  return (
    <Main>
      <About />
      <CalendarWidget />
    </Main>
  );
};

export default Home;
