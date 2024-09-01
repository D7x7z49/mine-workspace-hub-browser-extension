// tests/components/Root.test.tsx
import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';

// import '@testing-library/jest-dom/jest-globals';

const TestJestReact: React.FC = () => {
  return (
    <React.StrictMode>
      <h1>Home</h1>
    </React.StrictMode>
  );
};

describe('TestJestReact Node test Jest', () => {
  it('test Jest config React', () => {
    render(
      <React.StrictMode>
        <TestJestReact />
      </React.StrictMode>,
    );
    const text = screen.getByText(/Home/i);
    expect(text).toBeInTheDocument();
  });
});
