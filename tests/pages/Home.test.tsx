import React from 'react';

import { render } from '../test-utils';
import { fireEvent, screen } from '@testing-library/react';

import Main from '@workspacehub/home/Main';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (i18nKey: string) => i18nKey,
      // or with TypeScript:
      //t: (i18nKey: string) => i18nKey,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

describe('Home main component', () => {
  test('renders header and footer correctly', () => {
    render(<Main />);

    expect(screen.getByText('Footer')).toBeInTheDocument();
    expect(screen.getByLabelText('page:home.aria-label.navbarButton')).toBeInTheDocument();
  });

  test('toggles navbar on button click', () => {
    render(<Main />);

    const burgerButton = screen.getByLabelText('page:home.aria-label.navbarButton');

    fireEvent.click(burgerButton);
    expect(burgerButton).toHaveAttribute('aria-expanded', 'true');
  });

  test('handles responsive behavior correctly', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    render(<Main />);
    expect(screen.getByText('Navbar')).toBeInTheDocument();
  });
});
