import './globals.css';

import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import { Footer, Header } from '@/_components';
import { styled } from '@/styled-system/jsx';

const inter = Inter({ subsets: ['latin'] });

const Main = styled('main', {
  base: {
    gridArea: 'main',
    p: { sm: 8, md: 8, lg: 12 },
    overflow: 'auto',
  },
});

const Grid = styled('div', {
  base: {
    height: 'screen',
    display: 'grid',
    gridAutoColumns: '1fr',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: `
      'header'
      'main'
      'footer'
    `,
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
