import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';

const rootElement = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
