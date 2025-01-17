import { DEFAULT_THEME } from '@mantine/core';

import { ConfigStateCreator, ThemeSlice, ThemeState } from './interfaces';

const initialThemeState: ThemeState = {
  theme: DEFAULT_THEME,
};

const createThemeSlice: ConfigStateCreator<ThemeSlice> = (set) => ({
  ...initialThemeState,
  resetTheme: () => {
    set(
      initialThemeState,
      // undefined,
      // 'theme/resetTheme'
    );
  },
  // throwError: () =>
  //   set(() => ({
  //     theme: {
  //       primaryColor: 'xxx',
  //     },
  //   })),
});

export { createThemeSlice, ThemeSlice };
