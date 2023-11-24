'use client'

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { lightTheme, darkTheme } from '@/components/theme/theme';
import useThemeSwitcher from '@/components/theme/useThemeSwitcher';
import NextAppDirEmotionCacheProvider from './EmotionCache';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {

  const service = useThemeSwitcher();

  const theme = service.getCurrentThemeName() === 'light' ? 
    lightTheme : darkTheme;

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};
