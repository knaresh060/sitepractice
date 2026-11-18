
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container fluid>
        <Row className="g-4 px-3">

          {/* Company Information */}
          <Col xs={12} md={6} lg={3}>
            <h4 className="text-info fw-bold">SOFTECH</h4>
            <p className="text-light">
              Softech Solutions provides technology education
              and programming learning opportunities to help
              students build their future.
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={6} md={6} lg={3}>
            <h5 className="text-info">Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="text-white p-1">
                Home
              </Nav.Link>
              <Nav.Link  as={Link} to="/About" className="text-white p-1">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/Courses" className="text-white p-1">
                Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact" className="text-white p-1">
                Contact Us
              </Nav.Link>
            </Nav>
          </Col>

          {/* Courses */}
          <Col xs={6} md={6} lg={3}>
            <h5 className="text-info">Our Courses</h5>
            <Nav className="flex-column">
              <Nav.Link href="#courses" className="text-white p-1">
                C / C++
              </Nav.Link>
              <Nav.Link href="#courses" className="text-white p-1">
                Python
              </Nav.Link>
              <Nav.Link href="#courses" className="text-white p-1">
                Web Development
              </Nav.Link>
              <Nav.Link href="#courses" className="text-white p-1">
                React JS
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contact Details */}
          <Col xs={12} md={6} lg={3}>
            <h5 className="text-info">Contact Us</h5>
            <p className="mb-2">📍 Your Company Address</p>
            <p className="mb-2">📞 Your Phone Number</p>
            <p className="mb-2">✉️ your-email@example.com</p>

            <div className="mt-3">
              <a href="https://www.facebook.com"
                 className="text-info text-decoration-none me-3">
                Facebook
              </a>
              <a href="https://www.instagram.com"
                 className="text-info text-decoration-none me-3">
                Instagram
              </a>
              <a href="https://www.linkedin.com"
                 className="text-info text-decoration-none">
                LinkedIn
              </a>
            </div>
          </Col>

        </Row>

        <hr className="border-secondary mt-4" />

        <Row className="text-center">
          <Col>
            <p className="mb-1">
              © {new Date().getFullYear()} Softech Solutions.
              All Rights Reserved.
            </p>
            <small className="text-secondary">
              Designed with React Bootstrap
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
