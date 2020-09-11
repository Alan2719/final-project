import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
// import Icon from "../NavIcon";
import "./styles.css"
import Icon from "../NavIcon";



function Navbar2(){
    return (
        <Navbar expand="lg" className="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav"><Icon></Icon></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          
              <NavDropdown.Item href="/newtrip" className="navButton">NEW TRIP</NavDropdown.Item>
              <NavDropdown.Item href="/agenda" className="navButton">AGENDA</NavDropdown.Item>

        
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navbar2;