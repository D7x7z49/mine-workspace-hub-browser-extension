import React, { Component, ErrorInfo, ReactNode } from 'react';
import { useConfigStore } from '@workspacehub/config/useConfigStore';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  countdown: number;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    countdown: 5,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true, countdown: 5 };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.clearConfigStorage();
  }

  clearConfigStorage = () => {
    useConfigStore.getState().resetTheme();
    console.log('Config storage cleared');
    this.startCountdown();
  };

  startCountdown = () => {
    const interval = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.countdown <= 1) {
          clearInterval(interval);
          window.location.reload();
        }
        return { countdown: prevState.countdown - 1 };
      });
    }, 1000);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>Attempting to reset configuration in {this.state.countdown} seconds...</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
