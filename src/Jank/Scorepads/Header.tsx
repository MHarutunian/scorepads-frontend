import Menu from '../../Menu/Menu';
import MenuLink from '../../Menu/MenuLink';
import Logo from '../Logo/Logo';

const Header = () => (
  <>
    <Menu>
      <MenuLink to="/jank/terms">Begriffe verwalten</MenuLink>
    </Menu>
    <Logo />
  </>
);

export default Header;
