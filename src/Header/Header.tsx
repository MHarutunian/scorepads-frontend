import React from 'react';

import GameLink from './GameLink';

const Header = () => (
  <>
    <h1>Scorepads</h1>
    <h2>Bitte wähle ein Spiel aus</h2>
    <div>
      <GameLink to="/users">
        Spielerverwaltung
      </GameLink>
      <GameLink to="/doppelkopf">
        Doppelkopf
      </GameLink>
      <GameLink to="/jank">
        JanK
      </GameLink>
    </div>
  </>
);

export default Header;
