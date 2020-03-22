import React from 'react';
import { Link } from 'react-router-dom';

interface GameLinkProps {
  children: React.ReactNode,
  to: string
};

const GameLink = ({ children, to } : GameLinkProps) => {
  return (
    <Link to={to} className="header-link">
      {children}
    </Link>
  );
};

export default GameLink;
