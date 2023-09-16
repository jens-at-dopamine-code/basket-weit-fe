// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',

  theme: {
    tokens: {
      colors: {
        primary: { value: '#0173BF' },
      },
    },
  },
});
