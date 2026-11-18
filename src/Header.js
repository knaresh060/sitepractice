import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Login from './Login';

function Header()
{



return(

 <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="m-0 p-0"
    >
      <Container className="m-0 p-0">
        {/* Logo and Company Name */}
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center gap-1 m-0 p-0"
        >
          <img 
            src="/Logo2.png"
            alt="Softech Logo"
            className="d-inline-block align-top rounded "
            style={{
              width: "65px",
              height: "65px",
              objectFit: "contain"
            }}
          />

          <span className="fw-bold">SOFTECH</span>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="softech-navbar" className="me-3"/>

        {/* Menu Links */}
        <Navbar.Collapse id="softech-navbar" >
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="px-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/About" className="px-3">About</Nav.Link>
            <Nav.Link as={Link} to="/Courses" className="px-3">Courses</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="px-3">Contact</Nav.Link>
            <Nav.Link as={Link} to="/Login" className="px-3">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)
}

export default Header;