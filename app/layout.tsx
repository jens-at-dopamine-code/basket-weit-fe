import './globals.css';

import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import { Footer, Header } from '@/_components';
import { styled } from '@/styled-system/jsx';

import { WRAPPER_STYLES } from './_constants';

const inter = Inter({ subsets: ['latin'] });

const Container = styled('div', {
  base: {
    minHeight: 'screen',
    display: 'flex',
    flexDir: 'column',
  },
});

const Main = styled('main', {
  base: {
    px: { base: 8, xl: 0 },
    py: { base: 8, xl: 12 },
    flexGrow: 1,
    alignSelf: 'center',
    ...WRAPPER_STYLES,
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
        <Container>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
