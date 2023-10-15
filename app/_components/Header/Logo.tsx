import Image from 'next/image';
import React from 'react';

import { styled } from '@/styled-system/jsx';

const Container = styled('div', {
  base: {
    bgColor: 'primary.500',
    py: 3,
    pr: 3,
    pl: 8,
  },
});

export const Logo = () => {
  return (
    <Container>
      <Image
        alt="Logo basket weit"
        src="/logo-basket-weit.png"
        width={80}
        height={56}
      />
    </Container>
  );
};
