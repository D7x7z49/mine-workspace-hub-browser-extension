// src/popup/index.tsx

// import '@workspacehub/popup/styles.css';
import '@mantine/core/styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import '@workspacehub/config/i18n/init';

import Main from '@workspacehub/popup/Main';
import { useConfigStore } from '@workspacehub/config/useConfigStore';
import { GlobalErrorBoundary } from '@workspacehub/components/error/GlobalErrorBoundary';

const Popup = () => {
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
    <Popup />
  </React.StrictMode>,
);
