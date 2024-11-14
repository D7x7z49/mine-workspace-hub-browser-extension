import React from 'react';
import ReactDOM from 'react-dom/client';

import '@radix-ui/themes/styles.css';

import { Theme } from '@radix-ui/themes';
import Main from '@workspacehub/popup/Main';

import '@workspacehub/i18n';

const rootElement = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Theme>
      <Main />
    </Theme>
  </React.StrictMode>,
);
