import Image from 'next/image';
import React from 'react';

import { WRAPPER_STYLES } from '@/_constants';
import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

const Container = styled('footer', {
  base: {
    px: { base: 4, xl: 0 },
    py: { base: 4 },
    display: 'flex',
    alignItems: 'center',
    flexDir: 'column',
  },
});

const Sponsors = styled('h3', {
  base: {
    mb: 1,
    color: 'rgba(0,0,0,0.4)',
    textAlign: 'center',
    fontSize: 32,
    ...WRAPPER_STYLES,
  },
});

const ImageContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    flexDir: 'row',
    flexWrap: 'wrap',
    justifyContent: { base: 'space-around', xl: 'space-between' },
    ...WRAPPER_STYLES,
  },
});

const imageStyles = cva({
  base: {
    display: 'block',
    transition: '300ms',
    _hover: {
      opacity: 0.8,
      transform: 'scale(1.05)',
    },
  },
  variants: {
    visual: {
      first: {},
    },
  },
});

export const Footer = () => (
  <Container>
    <Sponsors>Our Sponsors</Sponsors>
    <ImageContainer>
      <a href="https://www.codious.io/" target="_blank" rel="noreferrer">
        <Image
          className={imageStyles({ visual: 'first' })}
          alt="Codious logo"
          src="/codious-logo.png"
          width={156}
          height={50}
        />
      </a>
      <a
        href="https://www.facebook.com/FrituurWeit"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className={imageStyles()}
          alt="Frituur Weit logo"
          src="/frituur-weit-logo.png"
          width={75}
          height={75}
        />
      </a>
      <a
        href="https://www.facebook.com/cafederut"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className={imageStyles()}
          alt="De Rut logo"
          src="/rut-logo.png"
          width={75}
          height={75}
        />
      </a>
      <a
        href="https://www.facebook.com/p/Caf%C3%A9-Schoonzicht-100063715951587/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className={imageStyles()}
          alt="Schoonzicht logo"
          src="/schoonzicht-logo.png"
          width={103}
          height={50}
        />
      </a>
      <a href="https://scheers.business.site/" target="_blank" rel="noreferrer">
        <Image
          className={imageStyles()}
          alt="Scheers logo"
          src="/scheers-logo.png"
          width={178}
          height={125}
        />
      </a>
    </ImageContainer>
  </Container>
);
