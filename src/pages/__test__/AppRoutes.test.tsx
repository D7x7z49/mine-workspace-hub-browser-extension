import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { routes } from '@workspacehub/pages/AppRoutes';
import { expect, test } from '@jest/globals';

test('MemoryRouter test app routes', async () => {
  const router = createMemoryRouter(routes);

  render(<RouterProvider router={router} />);
  screen.debug();
  const texts = screen.queryAllByText(/Layout/i);
  expect(texts.length).toBeGreaterThan(0);
});
