import NextLink from 'next/link';
import type { PropsWithChildren } from 'react';
import React, { memo } from 'react';

import type { ModuleRoute } from '@/_enumerations';
import { styled } from '@/styled-system/jsx';

type NavigationLinkProps = PropsWithChildren<{
  isActive?: boolean;
  uri: ModuleRoute;
}>;

const Link = styled(NextLink, {
  base: {
    display: 'block',
    mx: 2,
    color: 'rgba(255,255,255, 0.6)',
    _hover: {
      color: 'white',
    },
  },
  variants: {
    visual: {
      activeLink: {
        color: 'white',
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
