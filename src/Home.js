
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from "./Header";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home() 
{

// const[count,setcount]=useState(0)
// const[data,setdata]=useState(10)

// useEffect(()=>{
//   console.log("useeffect default called")
// },[])

// useEffect(()=>{
//   console.log("useeffect count called")
//   if(count==10)
//     setcount(1)
// },[count])

// useEffect(()=>{
//   console.log("useeffect data called")
// },[data])

const courses = [
    {
      name: "C Programming",
      image: "/c.jpg",
      description: "Learn variables, loops, arrays and functions."
    },
    {
      name: "C++ Programming",
      image: "/cpp.jpg",
      description: "Learn OOP, classes, objects and inheritance."
    },
    {
      name: "Python",
      image: "/python.jpg",
      description: "Learn Python basics, functions and projects."
    },
    {
      name: "Java",
      image: "/java.jpg",
      description: "Learn Java programming and object-oriented concepts."
    }
  ];

return (

<div>
<Header />
{/* <button onClick={()=>setcount(count+1)}>increment count</button>
<button onClick={()=>setdata(data+5)}>increment data</button>

<h2>count is {count}</h2>
<h2>Data is{data}</h2> */}

  <Container fluid className="p-0">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/off.jpg"
            alt="Softech office"
            style={{
              aspectRatio: "4 / 2",
              objectFit: "contain",
              backgroundColor: "#eeeeee"
            }}
          />
          <Carousel.Caption>
            <h3>Softech Solutions</h3>
            <p>Technology for a better future.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/chairs.jpg"
            alt="Office workspace"
            style={{
              aspectRatio: "4 / 2",
              objectFit: "contain",
              backgroundColor: "#eeeeee"
            }}
          />
          <Carousel.Caption>
            <h3>Modern Workspace</h3>
            <p>Learn, innovate and grow.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 m-0 g-0 p-0"
            src="/lab.jpg"
            alt="Computer lab"
            style={{
              
              objectFit: "contain",
            }}
          />
          <Carousel.Caption>
            <h3>Computer Education</h3>
            <p>Build your skills with us.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>

 <Container fluid className="py-0" >
      <h2 className="text-center mb-0">
        Our Coding Courses
      </h2>

      <Row  xs={1} sm={2} md={3} lg={4} className="g-0 ">
        {courses.map((course, index) => (
          <Col key={index} >
            <Card  className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={course.image}
                alt={course.name}
                style={{
                  height: "180px",
                  objectFit: "contain",
                  
                }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title>
                  {course.name}
                </Card.Title>

                <Card.Text>
                  {course.description}
                </Card.Text>

                <Button
                  variant="primary"
                  className="mt-auto"
                  href="#contact"
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

   


<Container fluid className="my-3">
      <Row>
        <Col md={4} className="p-0">
          <div className="bg-primary text-white text-center p-2">
            <h4>Latest News</h4>
          </div>

          <div className="border p-2">
            <marquee
              direction="up"
              scrollamount="3"
              height="300"
              onMouseOver={(e) => e.currentTarget.stop()}
              onMouseOut={(e) => e.currentTarget.start()}
            >
              <p>📢 Admissions are open for new coding courses.</p>
              <hr />

              <p>💻 Learn Python and Java programming.</p>
              <hr />

              <p>🌐 Web Development classes are starting soon.</p>
              <hr />

              <p>🎓 Register now for React JS training.</p>
              <hr />

              <p>📅 Contact us for course details.</p>
              <hr />
            </marquee>
          </div>       
        </Col>

<Col md={4}>

</Col>

</Row>
</Container>


<Footer />
</div>



     
  );
}

export default Home;
