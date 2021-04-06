import Menu from '../../Menu/Menu';
import MenuLink from '../../Menu/MenuLink';
import Logo from '../Logo/Logo';

const Header = () => (
  <>
    <Menu>
      <MenuLink to="/jank">Zurück zu JanK</MenuLink>
    </Menu>
    <Logo />
    <h1>Begriffe verwalten</h1>
  </>
);

export default Header;
