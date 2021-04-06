import Menu from '../Menu/Menu';
import MenuLink from '../Menu/MenuLink';

const Home = () => (
  <>
    <h1>Scorepads</h1>
    <h2>Bitte wähle ein Spiel aus</h2>
    <Menu>
      <MenuLink to="/users">
        Spielerverwaltung
      </MenuLink>
      <MenuLink to="/doppelkopf">
        Doppelkopf
      </MenuLink>
      <MenuLink to="/jank">
        JanK
      </MenuLink>
    </Menu>
  </>
);

export default Home;
