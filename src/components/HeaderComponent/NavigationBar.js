import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
//import "./NavBar.css"

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Link to="/"><Navbar.Brand>FraserTooth.github.io</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to="/about"><Nav.Link href="#link">About</Nav.Link></Link>
            <Link to="/projects"><Nav.Link href="#link">Projects</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar;
