import { ReactNode } from 'react';

import { Link } from './ui';

interface MenuLinkProps {
  children: ReactNode,
  to: string
}

const MenuLink = ({ children, to }: MenuLinkProps) => (
  <Link to={to}>
    {children}
  </Link>
);

export default MenuLink;
