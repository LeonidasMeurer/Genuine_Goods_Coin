import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

const Header = ({ ...props }) => {
  return (
    <Navbar {...props}>
      <Navbar.Brand disabled >ToMuchMoney!</Navbar.Brand>
      <Nav>
        <Nav.Item href='/' icon={<HomeIcon />}>
          Home
        </Nav.Item>
        <Nav.Item href='/listed_for_sale'>Market</Nav.Item>
        <Nav.Item href='/watch_minter'>Watches</Nav.Item>
        <Nav.Item href='/prada_minter'>Prada</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;