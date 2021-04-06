import {
  BrowserRouter,
  MemoryRouter,
} from 'react-router-dom';
import {
  fireEvent,
  render,
} from '@testing-library/react';

import MenuLink from '../MenuLink';

describe('MenuLink', () => {
  it('renders children', () => {
    const { getByText } = render(
      <MenuLink to="/anything">
        Some Game
      </MenuLink>,
      { wrapper: MemoryRouter },
    );

    expect(getByText('Some Game')).toBeInTheDocument();
  });

  it('renders clickable link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <MenuLink to="/some-game">
          Some Game
        </MenuLink>
      </BrowserRouter>,
    );

    const link = getByText('Some Game');

    fireEvent.click(link);

    expect(window.location.pathname).toBe('/some-game');
  });
});
