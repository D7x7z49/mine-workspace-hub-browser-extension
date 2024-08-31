import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const defaultConfig: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const defaultTheme = extendTheme(defaultConfig);

export { defaultTheme };
