import Image from 'next/image';
import React from 'react';

import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

const Container = styled('footer', {
  base: {
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
    w: { base: 'screen', xl: '1280px' },
  },
});

const ImageContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    flexDir: 'row',
    flexWrap: 'wrap',
    justifyContent: { base: 'space-around', xl: 'space-between' },
    w: { base: 'screen', xl: '1280px' },
    px: { base: 4, xl: 0 },
    py: { base: 4 },
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
});

export const Footer = () => (
  <Container>
    <Sponsors>Our Sponsors</Sponsors>
    <ImageContainer>
      <a href="https://www.codious.io/" target="_blank" rel="noreferrer">
        <Image
          className={imageStyles()}
          alt="Codious logo"
          src="/codious-logo.png"
          style={{ width: '156px', height: '50px' }}
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
          style={{ width: '75px', height: '75px' }}
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
          style={{ width: '75px', height: '75px' }}
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
          style={{ width: '103px', height: '50px' }}
          width={103}
          height={50}
        />
      </a>
      <a href="https://scheers.business.site/" target="_blank" rel="noreferrer">
        <Image
          className={imageStyles()}
          alt="Scheers logo"
          src="/scheers-logo.png"
          style={{ width: '178px', height: '125px' }}
          width={178}
          height={125}
        />
      </a>
    </ImageContainer>
  </Container>
);
