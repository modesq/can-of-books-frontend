import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
        {isAuthenticated && <NavItem className="nav"><Link to="/profile" className="nav-link">Profile</Link></NavItem>}
        <NavItem className="nav"><Login /></NavItem>
        <NavItem className="nav"><Logout /></NavItem>
      </Navbar>
    )
  }
}

export default Header;
