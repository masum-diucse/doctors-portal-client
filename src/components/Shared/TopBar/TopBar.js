import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Topbar.css';
const TopBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">Doctors</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="mr-4"><Link to="/">Home</Link></Nav.Link>
          <Nav.Link className="mr-4"><Link to="/appointment">Appointment</Link></Nav.Link>
          <Nav.Link className="mr-4">Dental Services</Nav.Link>
          <Nav.Link className="mr-4 " href="#link">Reviews</Nav.Link>
          <Nav.Link className="mr-4 " href="#link">Blog</Nav.Link>
          <Nav.Link className="mr-4 " href="#link">Contact Us</Nav.Link>
          <Nav.Link className="mr-4"><Link to="/login">Login</Link></Nav.Link>
          <Nav.Link className="mr-4"><Link to="/dashboard/appointment">Dashboard</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;