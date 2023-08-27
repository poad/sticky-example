import { createTheme } from '@mui/material';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const options = {
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  ...options,
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  ...options,
});
