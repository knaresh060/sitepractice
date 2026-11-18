// // import Student from "./Naresh";
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
import ExampleCarouselImage from './ExampleCarouselImage'


function App() 
{
  

   const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }



  return (
 <div>
 <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
           <img src="https://i.pinimg.com/1200x/5a/3d/26/5a3d26c57ab9f6ff41481f84ed2b3aa4.jpg "
       style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
           <img src=" https://i.pinimg.com/736x/19/a3/d0/19a3d0e4b1010f0c6ca4ade9cfe03f12.jpg"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
           <img src=" https://i.pinimg.com/736x/b1/72/7a/b1727abf811f6ce6729c6dc087c1bd9b.jpg"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>Third slide label</h3>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
           <img src="https://i.pinimg.com/1200x/5a/3d/26/5a3d26c57ab9f6ff41481f84ed2b3aa4.jpg "
       style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
           <img src=" https://i.pinimg.com/736x/19/a3/d0/19a3d0e4b1010f0c6ca4ade9cfe03f12.jpg"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
           <img src=" https://i.pinimg.com/736x/b1/72/7a/b1727abf811f6ce6729c6dc087c1bd9b.jpg"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>Third slide label</h3>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


     <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
           <img src="https://i.pinimg.com/1200x/5a/3d/26/5a3d26c57ab9f6ff41481f84ed2b3aa4.jpg "
       style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
           <img src=" https://i.pinimg.com/736x/19/a3/d0/19a3d0e4b1010f0c6ca4ade9cfe03f12.jpg"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
           <img src=" https://i.pinimg.com/736x/b1/72/7a/b1727abf811f6ce6729c6dc087c1bd9b.jpg"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>Third slide label</h3>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


     <Carousel slide={false}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
           <img src="https://i.pinimg.com/1200x/5a/3d/26/5a3d26c57ab9f6ff41481f84ed2b3aa4.jpg "
       style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
           <img src=" https://i.pinimg.com/736x/19/a3/d0/19a3d0e4b1010f0c6ca4ade9cfe03f12.jpg"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
           <img src=" https://i.pinimg.com/736x/b1/72/7a/b1727abf811f6ce6729c6dc087c1bd9b.jpg"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>Third slide label</h3>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



     <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="First slide" />
       
        <Carousel.Caption>
          <img src="https://i.pinimg.com/1200x/5a/3d/26/5a3d26c57ab9f6ff41481f84ed2b3aa4.jpg "
       style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <img src=" https://i.pinimg.com/736x/19/a3/d0/19a3d0e4b1010f0c6ca4ade9cfe03f12.jpg"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
           <img src=" https://i.pinimg.com/736x/b1/72/7a/b1727abf811f6ce6729c6dc087c1bd9b.jpg"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel><br/>


     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img src="https://i.pinimg.com/1200x/5a/3d/26/5a3d26c57ab9f6ff41481f84ed2b3aa4.jpg "
       style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src=" https://i.pinimg.com/736x/19/a3/d0/19a3d0e4b1010f0c6ca4ade9cfe03f12.jpg"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src=" https://i.pinimg.com/736x/b1/72/7a/b1727abf811f6ce6729c6dc087c1bd9b.jpg"
        style={{ width: "100%", height: "400px", objectFit: "cover" }}/>
          <h3>Third slide label</h3>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



       </div>
  );
}

export default App;
