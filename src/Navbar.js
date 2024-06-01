import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Importing the new CSS file

function MyNavbar() {
  return (
    <Navbar className="navbar-custom" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/logoPj.png"  // Path to the logo image in the public directory
            alt="Logo"
            className="d-inline-block align-top"
            style={{ width: '40px', height: '40px', marginLeft:'-150px' }}
          />
          <span className="company-name ms-2">PJ</span>SoftTech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/student-information-system">Student Information System</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/online-admission-system">Online Admission System</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fees-management-system">Fees Management System</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/online-examination-system">Online Examination System</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/attendance-management-system">Attendance Management System</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/higher-education-system">Higher Education System</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/university-management-software">University Management Software</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/institute-management-software">Institute Management Software</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/college-management-software">College Management Software</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/school-management-software">School Management Software</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faculty-management-software">Faculty Management System</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/learning-management-software">Learning Management System</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/organization">Organization</Nav.Link>
            <Nav.Link as={Link} to="/Team">Team</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
