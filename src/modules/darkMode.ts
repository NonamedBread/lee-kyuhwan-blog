import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type DarkModeState = {
  theme: 'dark' | 'light' | 'default';
  systemTheme: 'dark' | 'light' | 'not-ready';
};

const initialState: DarkModeState = {
  theme: 'default',
  systemTheme: 'not-ready',
};

const darkMode = createSlice({
  name: 'darkMode',
  initialState: initialState,
  reducers: {
    enableDarkMode(state) {
      state.theme = 'dark';
    },
    enableLightMode(state) {
      state.theme = 'light';
    },
    setSystemTheme(state, action: PayloadAction<'dark' | 'light'>) {
      state.systemTheme = action.payload;
    },
    initializeTheme(state) {
      if (typeof window !== 'undefined') {
        state.theme =
          localStorage.theme === 'dark'
            ? 'dark'
            : !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'dark'
              : 'light';
      }
    },
  },
});

export const { enableDarkMode, enableLightMode, setSystemTheme, initializeTheme } = darkMode.actions;

export default darkMode;
