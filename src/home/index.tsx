// src/popup/index.tsx

// import '@workspacehub/popup/styles.css';
import '@mantine/core/styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import '@workspacehub/config/translations/i18n';

import Main from '@workspacehub/home/Main';
import { useConfigStore } from '@workspacehub/config/useConfigStore';
import { GlobalErrorBoundary } from '@workspacehub/components/error/GlobalErrorBoundary';

const Home = () => {
  const { theme } = useConfigStore();

  return (
    <GlobalErrorBoundary>
      <MantineProvider theme={theme}>
        <Main />
      </MantineProvider>
    </GlobalErrorBoundary>
  );
};

const rootElement = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
