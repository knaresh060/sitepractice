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
import Header from './Header';
import Home from './Home';
import About from './About';
import Courses from './Course';
import Contact from './Contact';
import Footer from './Footer';
import { BrowserRouter as Routers,Routes,Route,Link } from 'react-router-dom';
import Login from './Login';
import Headerlogin from './Headerlogin';
import Loginpage from './Loginpage';
import Dashboard from './Dashboard';
import Studentlist from './Studentlist';
import Courselist from './Courselist';
import Teacherlist from './Teacherlist';



function App() 
{



return (

  <div>
  
<Routers>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/About" element={<About />} />
<Route path="/Courses" element={<Courses />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/Login" element={<Login />} />
<Route path="/Loginpage" element={<Loginpage />} />
<Route path="/Dashboard" element={<Dashboard />} />
<Route path="/Studentlist" element={<Studentlist />} />
<Route path="/Courselist" element={<Courselist />} />
<Route path="/Teacherlist" element={<Teacherlist />} />
</Routes>
</Routers>
     </div>
  );
}

export default App;
