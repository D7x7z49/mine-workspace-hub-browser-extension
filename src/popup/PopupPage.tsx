import React from 'react';
import JumpButton from '@workspacehub/components/button/JumpButton';

const TestComponent: React.FC = () => {
  return (
    <div>
      <JumpButton label="GO HOME" targetUrl="index.html" />
    </div>
  );
};

export default TestComponent;
