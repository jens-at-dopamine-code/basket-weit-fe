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
    extend: {
      tokens: {
        colors: {
          primary: {
            DEFAULT: { value: '#01345E' },
            50: { value: '#e6ebef' },
            100: { value: '#b3c2cf' },
            200: { value: '#809aaf' },
            300: { value: '#4d718e' },
            400: { value: '#1a486e' },
            500: { value: '#01345E' },
            600: { value: '#012f55' },
            700: { value: '#012442' },
            800: { value: '#011a2f' },
            900: { value: '#00101c' },
            950: { value: '#000509' },
            alpha: { value: 'rgba(1, 52, 94, 0.5)' },
          },
          secondary: {
            DEFAULT: { value: '#0273bf' },
            50: { value: '#e6f1f9' },
            100: { value: '#b3d5ec' },
            200: { value: '#81b9df' },
            300: { value: '#4e9dd2' },
            400: { value: '#1b81c5' },
            500: { value: '#0273bf' },
            600: { value: '#0268ac' },
            700: { value: '#015186' },
            800: { value: '#013a60' },
            900: { value: '#012239' },
            950: { value: '#000b13' },
            alpha: { value: 'rgba(2, 115, 191, 0.5)' },
          },
        },
      },
    },
  },
});
