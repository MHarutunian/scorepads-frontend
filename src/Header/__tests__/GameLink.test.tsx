import React from 'react';
import { createMemoryHistory } from 'history';
import {
  MemoryRouter,
  Router
} from 'react-router-dom';
import {
  fireEvent,
  render
} from '@testing-library/react';

import GameLink from '../GameLink';

describe('GameLink', () => {
  it('renders children', () => {
    const { getByText } = render(
      <GameLink to="/anything">
        Some Game
      </GameLink>,
      { wrapper: MemoryRouter });

    expect(getByText('Some Game')).toBeInTheDocument();
  });

  it('renders clickable link', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <GameLink to="/some-game">
          Some Game
        </GameLink>
      </Router>,
    );

    const gameLink = getByText('Some Game');

    fireEvent.click(gameLink);

    expect(history.location.pathname).toBe('/some-game');
  });
});
