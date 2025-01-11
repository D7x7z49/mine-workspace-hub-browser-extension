import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useConfigStore } from '@workspacehub/config/useConfigStore';

const MantineFallbackRender: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <button onClick={() => resetErrorBoundary()}>reset</button>
      <br />
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.name}</pre>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
};

const GlobalErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const clearConfigStorage = () => {
    useConfigStore.getState().resetTheme();
    console.log('Config storage cleared');
  };

  return (
    <ErrorBoundary
      FallbackComponent={MantineFallbackRender}
      onReset={(details) => {
        console.log(details);

        clearConfigStorage();
      }}>
      {children}
    </ErrorBoundary>
  );
};

export { GlobalErrorBoundary };
