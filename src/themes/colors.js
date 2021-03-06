import { darken, lighten } from 'polished';

export default {
  black: darken(0.48, '#7e7e7e'),
  blue: '#193EB7',
  cyan: '#6CD5D5',
  green: '#6AC32D',
  purple: '#D672AF',
  red: '#E51515',
  white: '#fff',
  yellow: '#FFBE07',

  mono: {
    100: lighten(0.48, '#7e7e7e'),
    200: lighten(0.36, '#7e7e7e'),
    300: lighten(0.24, '#7e7e7e'),
    400: lighten(0.12, '#7e7e7e'),
    500: '#7e7e7e',
    600: darken(0.12, '#7e7e7e'),
    700: darken(0.24, '#7e7e7e'),
    800: darken(0.36, '#7e7e7e'),
    900: darken(0.48, '#7e7e7e'),
  },
  shadow: {
    50: 'rgba(0,0,0,.035)',
    100: 'rgba(0,0,0,.07)',
    200: 'rgba(0,0,0,.17375)', // 0,07+((0,83/8)*1)
    300: 'rgba(0,0,0,.2775)',
    400: 'rgba(0,0,0,.38125)',
    500: 'rgba(0,0,0,.485)',
    600: 'rgba(0,0,0,.58875)',
    700: 'rgba(0,0,0,.6925)',
    800: 'rgba(0,0,0,.79625)',
    900: 'rgba(0,0,0,.9)',
  },
  flare: {
    50: 'rgba(255,255,255,.035)',
    100: 'rgba(255,255,255,.07)',
    200: 'rgba(255,255,255,.17375)', // 0,07+((0,83/8)*1)
    300: 'rgba(255,255,255,.2775)',
    400: 'rgba(255,255,255,.38125)',
    500: 'rgba(255,255,255,.485)',
    600: 'rgba(255,255,255,.58875)',
    700: 'rgba(255,255,255,.6925)',
    800: 'rgba(255,255,255,.79625)',
    900: 'rgba(255,255,255,.9)',
  },
};
