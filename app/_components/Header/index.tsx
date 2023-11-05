import React from 'react';

import { styled } from '@/styled-system/jsx';

import { Logo } from './Logo';
import { Navigation } from './Navigation';

const HeaderContainer = styled('header', {
  base: {
    bg: 'primary',
    p: 4,
    display: 'flex',
    justifyContent: 'center',
  },
});

const Wrapper = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    w: { base: 'screen', xl: '1280px' },
  },
});

export const Header = () => (
  <HeaderContainer>
    <Wrapper>
      <Logo />
      <Navigation />
    </Wrapper>
  </HeaderContainer>
);
