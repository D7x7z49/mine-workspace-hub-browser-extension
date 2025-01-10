// src/popup/index.tsx

// import '@workspacehub/popup/styles.css';
import '@mantine/core/styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import '@workspacehub/config/translations/i18n';

import Main from '@workspacehub/popup/Main';
import { useConfigStore } from '@workspacehub/config/useConfigStore';
import ErrorBoundary from './ErrorBoundary';

const Popup = () => {
  const { theme } = useConfigStore();
  // chrome.storage.local.remove('config-storage', () => {
  //   console.log('Config storage removed using chrome.storage.local!');
  // });
  // const mineTheme = createTheme({
  //   ...theme
  // })

  return (
    <MantineProvider theme={theme}>
      <Main />
    </MantineProvider>
  );
};

const rootElement = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Popup />
    </ErrorBoundary>
  </React.StrictMode>,
);
