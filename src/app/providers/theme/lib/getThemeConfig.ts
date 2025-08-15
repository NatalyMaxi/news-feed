import { ThemeConfig, theme as antdTheme } from 'antd';

import { ThemeMode } from '../ThemeContext';

const { defaultAlgorithm, darkAlgorithm } = antdTheme;

export const getThemeConfig = (mode: ThemeMode): ThemeConfig => ({
  algorithm: mode === 'dark' ? darkAlgorithm : defaultAlgorithm,
  token: {
    colorPrimary: mode === 'dark' ? '#722ED1' : '#1677FF',
  },
});
