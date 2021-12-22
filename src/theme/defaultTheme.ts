import { Dict } from '@/shared/types';

const defaultTheme: Dict = {
  colors: {
    primary: {
      default: '#ed1c24',
      sub1: '#f27173',
      sub2: '#800f14',
    },
    secondary: {
      default: '#2dbdb6',
      sub1: '#89d0c8',
      sub2: '#009c96',
    },
    neutral: {
      white: '#ffffff',
      black: '#000000',
      dgray: '#4c4c4e',
      lgray: '#d1d2d4',
    },
  },
  background: {
    light: {
      color: '#ffffff',
    },
    dark: {
      color: '#121212',
    },
  },
  font: {
    sizes: {
      '3xs': '0.425rem',
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.375rem',
      '3xl': '1.5rem',
      '4xl': '1.75rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '3.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    colors: {
      light: {
        title: '#000000d9',
        primary: '#000000d9',
        secondary: '#00000073',
        disable: '#00000040',
      },
      dark: {
        title: '#ffffff',
        primary: '#f2f2f2',
        secondary: '#dddddd',
        disable: '#cccccc',
      },
    },
  },
};

export default defaultTheme;
