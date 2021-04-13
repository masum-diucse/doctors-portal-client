import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Topbar.css';
const TopBar = () => {
    return (
        <Navbar  expand="lg">
  <Navbar.Brand href="#home">Doctors</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="mr-4" href="#home">Home</Nav.Link>
      <Nav.Link className="mr-4" href="#link">About</Nav.Link>
      <Nav.Link className="mr-4" href="#link">Dental Services</Nav.Link>
      <Nav.Link className="mr-4 text-white" href="#link">Reviews</Nav.Link>
      <Nav.Link className="mr-4 text-white" href="#link">Blog</Nav.Link>
      <Nav.Link className="mr-4 text-white" href="#link">Contact Us</Nav.Link>
  
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    );
};

export default TopBar;