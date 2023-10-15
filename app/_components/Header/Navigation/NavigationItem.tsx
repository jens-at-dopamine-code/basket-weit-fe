'use client';

import { usePathname } from 'next/navigation';
import type { PropsWithChildren } from 'react';

import type { ModuleRoute } from '@/_enumerations';
import { styled } from '@/styled-system/jsx';

import { NavigationLink } from './NavigationLink';

type NavigationItemProps = PropsWithChildren<{
  uri: ModuleRoute;
}>;

const List = styled('li', {
  base: {},
});

export const NavigationItem = ({ children, uri }: NavigationItemProps) => {
  const isActive = usePathname() === uri;

  return (
    <List>
      <NavigationLink isActive={isActive} uri={uri}>
        {children}
      </NavigationLink>
    </List>
  );
};
