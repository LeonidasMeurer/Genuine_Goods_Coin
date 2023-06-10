import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

const Header = ({ ...props }) => {
  return (
    <Navbar {...props}>
      <Navbar.Brand disabled >JustWatch</Navbar.Brand>
      <Nav>
        <Nav.Item href='/' icon={<HomeIcon />}>
          Home
        </Nav.Item>
        <Nav.Item href='/listed_for_sale'>Market</Nav.Item>
        <Nav.Item href='/watch_minter'>Watches</Nav.Item>
        <Nav.Item href='/prada_minter'>Prada</Nav.Item>


        {/* <Nav.Menu title="About">
          <Nav.Item href='/listed_for_sale'>Watches</Nav.Item>
          <Nav.Item eventKey="5">Team</Nav.Item>
          <Nav.Item eventKey="6">Contact</Nav.Item>
        </Nav.Menu> */}
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;