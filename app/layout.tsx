import './globals.css';

import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import { styled } from '@/styled-system/jsx';

import { Footer, Header } from './components';

const inter = Inter({ subsets: ['latin'] });

const Main = styled('main', {
  base: {
    p: 8,
  },
});

const Grid = styled('div', {
  base: {
    display: 'grid',
    gridAutoColumns: 'auto, 1fr, auto',
  },
});

export const metadata = {
  title: 'Basket Weit',
  description: "Website for basketball club 'Bsket Weit'",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Grid>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Grid>
      </body>
    </html>
  );
};

export default RootLayout;
