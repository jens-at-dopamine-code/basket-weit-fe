import React from 'react';

import { styled } from '@/styled-system/jsx';

import { Logo } from './Logo';
import { Navigation } from './Navigation';

const HeaderContainer = styled('header', {
  base: {
    display: 'flex',
    alignItems: 'center',
    bg: 'primary',
    p: 4,
  },
});

export const Header = () => (
  <HeaderContainer>
    <Logo />
    <Navigation />
  </HeaderContainer>
);
