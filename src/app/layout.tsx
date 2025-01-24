'use client';

import './layout.css';
import { ReactNode, useState } from 'react';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { darkTheme, lightTheme } from './theme';
import { Menu } from '../components/Menu';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const drawerWidth = 240;

export default function Layout({ children }: { children: ReactNode }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState<boolean>(
    prefersDarkMode ? true : false,
  );

  const [open, setOpen] = useState(false);

  function handleDrawerToggle() {
    setOpen(!open);
  }

  return (
    <html lang="en">
      <body
        style={{
          fontKerning: 'normal',
          MozFontFeatureSettings: 'kern',
          WebkitFontFeatureSettings: 'kern',
          maxHeight: '100vh',
          overflow: 'scroll',
        }}
      >
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Header
            darkMode={darkMode}
            onMenuClick={handleDrawerToggle}
            onThemeChange={setDarkMode}
          />
          <Menu width={drawerWidth} open={open} onClose={handleDrawerToggle} />
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
