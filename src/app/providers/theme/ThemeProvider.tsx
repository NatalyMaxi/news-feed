import React, { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';

import { ThemeContext, ThemeMode } from './ThemeContext';
import { getThemeConfig } from './lib/getThemeConfig';
import { saveTheme, loadTheme } from './lib/storage';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const storedTheme = loadTheme();
    if (storedTheme) setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      saveTheme(next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ConfigProvider theme={getThemeConfig(theme)}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
