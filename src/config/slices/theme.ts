import { StateCreator } from 'zustand';
import { DEFAULT_THEME, MantineThemeOverride } from '@mantine/core';

interface ThemeState {
  theme: MantineThemeOverride;
}

interface ThemeActions {
  resetTheme: () => void;
}

interface ThemeSlice extends ThemeState, ThemeActions {
  throwError: () => void;
}

const initialThemeState: ThemeState = {
  theme: DEFAULT_THEME,
};

const createThemeSlice: StateCreator<ThemeSlice, [], [], ThemeSlice> = (set) => ({
  ...initialThemeState,
  resetTheme: () => {
    set(initialThemeState);
  },
  throwError: () =>
    set(() => ({
      theme: {
        primaryColor: 'xxx',
      },
    })),
});

export { createThemeSlice, ThemeSlice };
