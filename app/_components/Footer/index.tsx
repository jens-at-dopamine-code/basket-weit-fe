import Image from 'next/image';
import React from 'react';

import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

const Container = styled('footer', {
  base: {
    p: 8,
    borderColor: 'secondary',
    borderTopWidth: 1,
    gridArea: 'footer',
  },
});

const Sponsors = styled('p', {
  base: { mb: 4, color: 'rgba(0,0,0,0.4)' },
});

const ImageContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
  },
});

const imageStyles = cva({
  base: {
    display: 'block',
  },
  variants: {
    visual: {
      notFirst: {
        ml: 1,
      },
    },
  },
});

export const Footer = () => (
  <Container>
    <Sponsors>Our Sponsors</Sponsors>
    <ImageContainer>
      <Image
        className={imageStyles()}
        alt="Codious logo"
        src="/codious.png"
        width={150}
        height={50}
      />
      <Image
        className={imageStyles({ visual: 'notFirst' })}
        alt="Frituur Weit logo"
        src="/frituur-weit.png"
        width={150}
        height={50}
      />
      <Image
        className={imageStyles({ visual: 'notFirst' })}
        alt="De Rut logo"
        src="/de_rut.png"
        width={50}
        height={50}
      />
    </ImageContainer>
  </Container>
);
