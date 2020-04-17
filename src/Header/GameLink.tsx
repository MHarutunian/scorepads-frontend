import React from 'react';

import { Link } from './ui';

interface GameLinkProps {
  children: React.ReactNode,
  to: string
}

const GameLink = ({ children, to }: GameLinkProps) => (
  <Link to={to} className="header-link">
    {children}
  </Link>
);

export default GameLink;
