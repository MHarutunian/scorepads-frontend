import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';

import Menu from '../Menu';
import MenuLink from '../MenuLink';

describe('Menu', () => {
  const links = (
    <>
      <MenuLink to="/users">Spielerverwaltung</MenuLink>
      <MenuLink to="/jank">JanK</MenuLink>
    </>
  );

  const RouterSomewhereElse = ({ children }: any) => (
    <MemoryRouter initialEntries={['/users']}>
      {children}
    </MemoryRouter>
  );

  const RouterOnHome = ({ children }: any) => (
    <MemoryRouter initialEntries={['/']}>
      {children}
    </MemoryRouter>
  );

  it('renders children when not on home', () => {
    const { getByText } = render(<Menu>{links}</Menu>, { wrapper: RouterSomewhereElse });

    expect(getByText('Spielerverwaltung')).toBeInTheDocument();
    expect(getByText('JanK')).toBeInTheDocument();
  });

  it('renders children when on home', () => {
    const { getByText } = render(<Menu>{links}</Menu>, { wrapper: RouterOnHome });

    expect(getByText('Spielerverwaltung')).toBeInTheDocument();
    expect(getByText('JanK')).toBeInTheDocument();
  });

  it('renders link to home when not on home', () => {
    const { getByText } = render(<Menu>{links}</Menu>, { wrapper: RouterSomewhereElse });

    const linkToHome = getByText('Zurück zur Startseite');
    expect(linkToHome).toBeInTheDocument();

    fireEvent.click(linkToHome);

    expect(window.location.pathname).toBe('/');
  });

  it('does not render link to home when on home', () => {
    const { queryByText } = render(<Menu>{links}</Menu>, { wrapper: RouterOnHome });

    expect(queryByText('Zurück zur Startseite')).not.toBeInTheDocument();
  });
});
