import '@workspacehub/popup/styles.css';
import '@radix-ui/themes/styles.css';
// import "@radix-ui/themes/layout.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme, ThemePanel } from '@radix-ui/themes';

import '@workspacehub/config/translations/i18n';

import Main from '@workspacehub/popup/Main';

const rootElement = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Theme accentColor="amber" grayColor="slate" scaling="95%">
      <Main />
      <ThemePanel />
    </Theme>
  </React.StrictMode>,
);
