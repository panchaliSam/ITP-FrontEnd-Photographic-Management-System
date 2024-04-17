import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/V De Silva Logo PNG.png';

function NavScrollExample() {  
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundColor: 'Grey' }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img 
            src={logo} 
            alt="Logo"
            style={{
              top: 0,
              left: '30px',
              height: '110px',
              width: '110px'
            }} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Company" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">About</NavDropdown.Item>
              <NavDropdown.Item href="#action4">History</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action13">Help Center</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Something else here</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Community" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action7">Staff</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Stat</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action9">Feedbacks&Comments</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action10">Images</NavDropdown.Item>
              <NavDropdown.Item href="#action11">Wallpapers</NavDropdown.Item>
              <NavDropdown.Item href="#action11">Backgrounds</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action12">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Link to="/signin" className="nav-link">
              <Button variant="outline-success"style={{ marginRight: '10px' }}>SignIn</Button>
            </Link>
            <Button variant="outline-success" style={{ marginRight: '10px' }}>SignUp</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
