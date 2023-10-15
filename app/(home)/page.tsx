import { styled } from '@/styled-system/jsx';

import { About, CalendarWidget } from './_components';

const Main = styled('main', {
  base: {
    display: 'flex',
    flexDir: { base: 'column', lg: 'row' },
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
