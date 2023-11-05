import React from 'react';
import type { IconBaseProps } from 'react-icons';
import * as HeroIcons2 from 'react-icons/hi2';

import type { IconName } from '@/_types';

type IconProps = IconBaseProps & {
  iconName: IconName;
};

export const Icon = ({ iconName, ...iconBaseProps }: IconProps) => {
  const Component = HeroIcons2[iconName];
  return <Component {...iconBaseProps} />;
};
