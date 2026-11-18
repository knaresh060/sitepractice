// // // // // import Student from "./Naresh";
// // import Student from "./Student";
// import Student from "./Studentlimit";
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



function App() 
{
  


  return (
  
  <div>
<Container style={{ height: "100px"}} fluid className="bg-secondary text-white p-0">
      <Row>
        <Col md={2}> <div style={{ paddingTop: "5px", paddingLeft: "3px"}}><img src="/Logo.png"  width="180"
      height="90"/></div></Col>
      <Col md={10} > <Navbar bg="primary" data-bs-theme="dark">
        <Container style={{ height: "80px"}}>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar></Col>
      </Row>
    </Container>


   
<Container fluid className="p-0">
  <Carousel fade>
    <Carousel.Item interval={3000}>
      <img className="slider-img" src="/off.jpg" alt="Office" />
    </Carousel.Item>

    <Carousel.Item interval={3000}>
      <img className="slider-img" src="/chairs.jpg" alt="Chairs" />
    </Carousel.Item>

    <Carousel.Item interval={3000}>
      <img className="slider-img" src="/lab.jpg" alt="Lab" />
    </Carousel.Item>

    <Carousel.Item interval={3000}>
      <img className="slider-img" src="/kids.jpg" alt="Kids" />
    </Carousel.Item>
  </Carousel>
</Container><br />

                           {/* cards title */}

 <CardGroup className="text-center">
      <Card bg="info" >
       
        <Card.Body >
          <Card.Title>DCA</Card.Title>
          <Card.Text>
            This course is not recommended by us .This is very low level course choose wisely.
          </Card.Text>
           <Card.Link href="#">Course fee</Card.Link>
        <Card.Link href="#">More info</Card.Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card bg="info" >
        
        <Card.Body>
          <Card.Title>BCA</Card.Title>
          <Card.Text>
           This course is equivalent to graduation level.best for students.choose it blindly.
          </Card.Text>
           <Card.Link href="#">Course fee</Card.Link>
        <Card.Link href="#">More info</Card.Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card bg="info" >
        <Card.Body>
          <Card.Title>MCA</Card.Title>
          <Card.Text>
           This course is for masters and experts.pahle graduation karke aa.
          </Card.Text>
          <Card.Link href="#">Course fee</Card.Link>
        <Card.Link href="#">More info</Card.Link>
        </Card.Body>
        <Card.Footer>
          
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>


   


<Container fluid className="bg-secondary text-white">
<Row>
<Col md={4}  > <Card.Title>NEWS</Card.Title>
<marquee direction="up" scrollamount="5">
<h6> Blue Cloud Softech Solutions Limited recently announced a $150 million partnership with
  \ Senegal (signed in October 2026) for local smartphone assembly and digital device production,
   alongside a ₹147 crore ($15.5 million) 
  AI infrastructure project won by its US subsidiary 
  (Global Impx Inc.) with IBM Cloud.</h6>
</marquee>
 </Col>

<Col md={4}>



</Col>




<Col md={4} > 
  <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-2"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact">
       +91- 9859656415
      </Tab>
    </Tabs>

 </Col>

</Row>
</Container>





<Container  style={{ height: "80px"}} fluid className="bg-dark text-white">
<Row>
<Col md={12}   className="d-flex justify-content-center align-items-center text-center"> 
 <h2> Developed By<br /><h6>Naresh kumar</h6> </h2><br />
 
 </Col>
</Row>
</Container>
    </div>
     
  );
}

export default App;
