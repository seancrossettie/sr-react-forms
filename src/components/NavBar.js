import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/add-students/">Add Students</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/students/">Student Cards</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { user && authenticated() }
            <NavItem>
              <Button onClick={signInUser}>
                {
                  user != null
                  && <NavItem>
                    {
                      user
                        ? <Button color="secondary" onClick={signOutUser}>Sign Out</Button>
                        : <Button color="secondary" onClick={signInUser}>Sign In</Button>
                    }
                  </NavItem>
                }
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
