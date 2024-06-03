import type { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

import scrollbar from './foundations/scrollbar';
import addressEntity from './globals/address-entity';
import getDefaultTransitionProps from './utils/getDefaultTransitionProps';

const global = (props: StyleFunctionProps) => ({
  body: {
    bg: mode('white', 'black')(props),
    ...getDefaultTransitionProps(),
    '-webkit-tap-highlight-color': 'transparent',
    'font-variant-ligatures': 'no-contextual',
    'font-family': `Parabole, NeueHaasDisplayMediu, NeueHaasDisplayLight, -apple-system, ` +
      `BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  mark: {
    bgColor: mode('green.100', 'green.800')(props),
    color: 'inherit',
  },
  'svg *::selection': {
    color: 'none',
    background: 'none',
  },
  form: {
    w: '100%',
  },
  ...scrollbar(props),
  ...addressEntity(props),
});

export default global;
