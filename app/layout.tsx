import './globals.css';

import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import { Footer, Header } from '@/_components';
import { styled } from '@/styled-system/jsx';

const inter = Inter({ subsets: ['latin'] });

const Main = styled('main', {
  base: {
    p: { base: 8, lg: 12 },
    flexGrow: 1,
  },
});

const Grid = styled('div', {
  base: {
    minHeight: 'screen',
    w: 'screen',
    display: 'flex',
    flexDir: 'column',
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
