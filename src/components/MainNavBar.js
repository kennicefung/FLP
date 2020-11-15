import React from 'react';
import "../App.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

const MainNavBar = () => {
    return(
      <div className="App">
        <Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
          <Navbar.Brand href="/">Financial Life Planner</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/Planning">
                <Nav.Link href="#planning">Planning</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
}

export default MainNavBar;