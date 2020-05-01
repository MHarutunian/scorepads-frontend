import React from 'react';
import {
  BrowserRouter,
  MemoryRouter,
} from 'react-router-dom';
import {
  fireEvent,
  render,
} from '@testing-library/react';

import GameLink from '../GameLink';

describe('GameLink', () => {
  it('renders children', () => {
    const { getByText } = render(
      <GameLink to="/anything">
        Some Game
      </GameLink>,
      { wrapper: MemoryRouter },
    );

    expect(getByText('Some Game')).toBeInTheDocument();
  });

  it('renders clickable link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <GameLink to="/some-game">
          Some Game
        </GameLink>
      </BrowserRouter>,
    );

    const gameLink = getByText('Some Game');

    fireEvent.click(gameLink);

    expect(window.location.pathname).toBe('/some-game');
  });
});
