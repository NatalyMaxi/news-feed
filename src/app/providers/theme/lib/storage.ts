import { ThemeMode } from '../ThemeContext';

const STORAGE_KEY = 'app-theme';

export const saveTheme = (theme: ThemeMode) => {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    console.error('Error saving theme to localStorage:', error);
  }
};

export const loadTheme = (): ThemeMode | null => {
  try {
    const theme = localStorage.getItem(STORAGE_KEY);
    if (theme === 'light' || theme === 'dark') return theme;
    return null;
  } catch (error) {
    console.error('Error loading theme from localStorage:', error);
    return null;
  }
};
