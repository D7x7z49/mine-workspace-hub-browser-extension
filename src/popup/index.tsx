// src/popup/index.tsx

import '@workspacehub/popup/styles.css';
import '@radix-ui/themes/styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';

import '@workspacehub/config/translations/i18n';

import Main from '@workspacehub/popup/Main';
import { useInitialTheme } from '@workspacehub/hooks/useInitialTheme';

const Popup = () => {
  const initialTheme = useInitialTheme();

  if (!initialTheme) {
    return <div>Loading...</div>;
  }

  return (
    <Theme
      appearance={initialTheme.appearance}
      accentColor={initialTheme.accentColor}
      grayColor={initialTheme.grayColor}
      panelBackground={initialTheme.panelBackground}
      radius={initialTheme.radius}
      scaling={initialTheme.scaling}>
      <Main />
    </Theme>
  );
};

const rootElement = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
);
