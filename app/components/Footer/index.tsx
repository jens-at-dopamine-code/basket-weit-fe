import Image from 'next/image';
import React from 'react';

import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

// const imageStyles = css({ display: 'block', '&:not': { _first: '' } });

const Container = styled('footer', {
  base: {
    borderTop: 2,
    p: 4,
  },
});

const Sponsors = styled('p', {
  base: { pb: 4, color: 'rgba(0,0,0,0.4)' },
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
        ml: 8,
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
