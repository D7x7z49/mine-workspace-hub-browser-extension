import React from 'react';
import ReactDOM from 'react-dom/client';

import '@workspacehub/config/translations/i18n';

import { Theme } from '@radix-ui/themes';
import Main from '@workspacehub/popup/Main';

const rootElement = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Theme>
      <Main />
    </Theme>
  </React.StrictMode>,
);
