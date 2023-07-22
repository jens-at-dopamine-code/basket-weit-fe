import React from 'react';
import type { IconBaseProps } from 'react-icons';
import * as FeatherIcons from 'react-icons/fi';

import type { IconName } from '@/types';

type FeatherIconProps = IconBaseProps & {
  iconName: IconName;
};

export const FeatherIcon = ({
  iconName,
  ...iconBaseProps
}: FeatherIconProps) => {
  const Component = FeatherIcons[iconName];
  return <Component {...iconBaseProps} />;
};
