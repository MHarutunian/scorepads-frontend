import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import MenuLink from './MenuLink';
import * as ui from './ui';

type MenuProps = {
  children: ReactNode
};

const Menu = ({ children }: MenuProps) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <ui.Menu>
      {!isHome && (
        <MenuLink to="/">Zurück zur Startseite</MenuLink>
      )}
      {children}
    </ui.Menu>
  );
};

export default Menu;
