import Image from 'next/image';
import React from 'react';

import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

const Container = styled('footer', {
  base: {
    p: 4,
    display: 'flex',
    alignItems: 'center',
    flexDir: 'column',
  },
});

const Sponsors = styled('h3', {
  base: {
    mb: 2,
    color: 'rgba(0,0,0,0.4)',
    w: 'full',
    textAlign: 'center',
    fontSize: 32,
  },
});

const ImageContainer = styled('div', {
  base: {
    w: 'full',
    display: 'flex',
    alignItems: 'center',
    flexDir: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

const imageStyles = cva({
  base: {
    display: 'block',
  },
  variants: {
    visual: {
      first: {
        // ml: 0,
      },
    },
  },
});

export const Footer = () => (
  <Container>
    <Sponsors>Our Sponsors</Sponsors>
    <ImageContainer>
      <Image
        className={imageStyles({ visual: 'first' })}
        alt="Codious logo"
        src="/codious-logo.png"
        width={156}
        height={50}
      />
      <Image
        className={imageStyles()}
        alt="Frituur Weit logo"
        src="/frituur-weit-logo.png"
        width={75}
        height={75}
      />
      <Image
        className={imageStyles()}
        alt="De Rut logo"
        src="/rut-logo.png"
        width={75}
        height={75}
      />
      <Image
        className={imageStyles()}
        alt="Schoonzicht logo"
        src="/schoonzicht-logo.png"
        width={103}
        height={50}
      />
      <Image
        className={imageStyles()}
        alt="Scheers logo"
        src="/scheers-logo.png"
        width={178}
        height={125}
      />
    </ImageContainer>
  </Container>
);
