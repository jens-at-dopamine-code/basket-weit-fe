import React from 'react';

import { WRAPPER_STYLES } from '@/_constants';
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
    ...WRAPPER_STYLES,
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
