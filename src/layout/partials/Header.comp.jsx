import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/img/crm-logo.png';

function Header() {
  const history = useHistory();

  const logMeOut = () => {
    history.push('/');
  };

  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
        <Nav>
          {/* <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="/dashboard">Logout</Link> */}

          <LinkContainer to="/dashboard">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link href="/dashboard">Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {};

export default Header;
