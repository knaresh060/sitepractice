import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import {useAccordionButton} from 'react-bootstrap';
import ContextAwareToggle from 'react-bootstrap/AccordionContext';
import "./App.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from './Header';
import Home from './Home';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Footer from './Footer';


function About() 
{



return (

<div>
<Header />


  <Container fluid className="about-page py-5">
      <Container>
        <Row className="align-items-center g-4">
          {/* Left side: Image */}
          <Col xs={12} md={6}>
            <img
              src="/off.jpg"
              alt="Softech office"
              className="about-img img-fluid rounded shadow"
            />
          </Col>

          {/* Right side: About content */}
          <Col xs={12} md={6}>
            <h1 className="text-primary fw-bold">About Us</h1>
            <h4 className="mb-3">
              Welcome to Softech Solutions
            </h4>

            <p>
              Softech Solutions is dedicated to providing
              technology education and software development
              solutions. We aim to help students and
              professionals improve their technical skills.
            </p>

            <p>
              Our focus is on practical learning, innovation,
              teamwork, and developing skills for the digital
              world.
            </p>

            <Button variant="primary" href="#contact">
              Contact Us
            </Button>
          </Col>
        </Row>

        {/* Mission and Vision */}
        <Row className="g-4 mt-4">
          <Col xs={12} md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <h3 className="text-primary">Our Mission</h3>
                <p>
                  To provide quality technical education and
                  practical learning opportunities that help
                  people grow in their careers.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <h3 className="text-primary">Our Vision</h3>
                <p>
                  To encourage innovation, creativity, and
                  digital skills for a technology-driven future.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>

<Footer />

</div>



     
  );
}

export default About;
