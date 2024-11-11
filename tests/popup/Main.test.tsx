import React from 'react';
import { render, screen } from '@testing-library/react';

import Main from '@workspacehub/popup/Main';

describe('Main Component', () => {
  it('renders the Text and Button correctly', () => {
    render(<Main />);

    expect(screen.getByText('Hello WebExtension from Radix Themes')).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /go/i });
    expect(button).toBeInTheDocument();
  });
});
