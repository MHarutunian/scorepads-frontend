import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Home from '../Home';

describe('Home', () => {
  it('renders link to user management', () => {
    const { getByText } = render(<Home />, { wrapper: MemoryRouter });

    expect(getByText('Spielerverwaltung')).toBeInTheDocument();
  });

  it('renders link to Doppelkopf', () => {
    const { getByText } = render(<Home />, { wrapper: MemoryRouter });

    expect(getByText('Doppelkopf')).toBeInTheDocument();
  });

  it('renders link to JanK', () => {
    const { getByText } = render(<Home />, { wrapper: MemoryRouter });

    expect(getByText('JanK')).toBeInTheDocument();
  });
});
