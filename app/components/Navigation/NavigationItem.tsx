import Link from 'next/link';
import type { PropsWithChildren } from 'react';

import type { ModuleRoute } from '@/enumerations';

type NavigationItemProps = PropsWithChildren<{
  uri: ModuleRoute;
}>;

export const NavigationItem = ({ children, uri }: NavigationItemProps) => (
  <Link href={uri}>{children}</Link>
);
