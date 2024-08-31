import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import AppRoutes from '@workspacehub/pages/AppRoutes';
import { defaultTheme } from '@workspacehub/themes/theme';

const Root: React.FC = () => {
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={defaultTheme.config.initialColorMode} />
    <Root />
  </React.StrictMode>,
);
