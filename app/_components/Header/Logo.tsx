import Image from 'next/image';
import React from 'react';

export const Logo = () => {
  return (
    <Image
      alt="Logo basket weit"
      src="/logo-basket-weit.png"
      width={80}
      height={56}
      style={{
        height: '29px',
        width: 'auto',
      }}
    />
  );
};
