'use client';
import { Rajdhani, Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: rajdhani.style.fontFamily,
  },
});

export default theme;
