import NextLink from 'next/link';
import type { PropsWithChildren } from 'react';
import React, { memo } from 'react';

import type { ModuleRoute } from '@/enumerations';
import { styled } from '@/styled-system/jsx';

type NavigationLinkProps = PropsWithChildren<{
  isActive?: boolean;
  uri: ModuleRoute;
}>;

const Link = styled(NextLink, {
  base: {
    display: 'block',
    p: 4,
    color: 'rgba(255,255,255, 0.6)',
    _hover: {
      color: 'white',
    },
  },
  variants: {
    visual: {
      activeLink: {
        bg: 'rgba(255,255,255, 0.6)',
        color: 'primary',
      },
    },
  },
});

export const NavigationLink = memo(
  ({ children, isActive = false, uri }: NavigationLinkProps) => {
    return (
      <Link href={uri} {...(isActive && { visual: 'activeLink' })}>
        {children}
      </Link>
    );
  },
);
