import { range } from '../utils';


// TODO: Dedupe with the value in server/config/defaults.json
export const AUTH_TOKEN_KEY = 'tvAuthToken';

export const MODAL_IDS = {
  addShow: 'addShow',
  editShow: 'editShow',
};

export const SORT_OPTIONS = {
  alpha: 'alpha',
  chrono: 'chrono',
};

export const COLORS = {
  orange: {
    primary: '#FF9100',
  },
  deepOrange: {
    primary: '#FF3D00',
  },
  red: {
    light: '#FF5252',
    primary: '#FF1744',
    dark: '#D50000',
  },
  pink: {
    light: '#FF4081',
    primary: '#ee0079',
  },
  purple: {
    primary: '#D500F9',
    dark: '#AA00FF',
  },
  deepPurple: {
    light: '#7e44ff',
    primary: '#651FFF',
    dark: '#5000bf',
  },
  blue: {
    light: '#448AFF',
    primary: '#2979FF',
    dark: '#2962FF',
  },
  cyan: {
    primary: '#00E5FF',
    dark: '#00B8D4',
  },
  teal: {
    primary: '#1DE9B6',
    dark: '#00BFA5',
  },
  green: {
    primary: '#00C853',
    dark: '#008e3b'
  },
  lime: {
    primary: '#C6FF00',
    dark: '#AEEA00',
  },
  gray: {
    veryLight: '#F4F4F4',
    light: '#CCCCCC',
    primary: '#777777',
    dark: '#424242',
    veryDark: '#1F1D1D',
  },
  white: '#FFFFFF',
  black: '#000000',
  highlight: {
    dark: 'rgba(0,0,0,0.06)',
    light: 'rgba(255,255,255,0.15)',
  },
};

export const Z_INDICES = {
  root: 1,
  modal: 100,
  alert: 1000,
};

// Media queries
export const BREAKPOINT_SIZES = {
  xs: 320,
  sm: 540,
  md: 900,
  lg: 1100,
};
export const BREAKPOINTS = {
  xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
  sm: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
  md: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  lg: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
};

// Sizes
export const UNIT = 16;

export const UNITS_IN_PX = range(30).map(i => UNIT * i + 'px');

export const HALF_UNIT = UNIT / 2;
export const HALF_UNIT_PX = HALF_UNIT + 'px';

export const ROW_HEIGHT = UNIT * 5;
export const ROW_HEIGHT_PX = ROW_HEIGHT + 'px';

export const MAX_WIDTH = {
  sm: '100%',
  md: '900px',
  base: '1110px',
};

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i;
export const isMobileUserAgent = mobileRegex.test(navigator.userAgent);
