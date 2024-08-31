import React from 'react';
import ReactDOM from 'react-dom/client';
import TestComponent from '@workspacehub/components/TestComponent';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>,
);
