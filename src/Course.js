
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Courses.css";
import Header from "./Header";
import Footer from "./Footer";

function Courses() {
  const courses = [
    {
      name: "C Programming",
      image: "/c.jpg",
      description: "Learn programming fundamentals, loops, arrays and functions."
    },
    {
      name: "C++ Programming",
      image: "/cpp.jpg",
      description: "Learn object-oriented programming and data structures."
    },
    {
      name: "Python",
      image: "/python.jpg",
      description: "Learn Python syntax, functions and application development."
    },
    {
      name: "Java",
      image: "/java.jpg",
      description: "Explore Java programming and object-oriented concepts."
    },
    {
      name: "HTML & CSS",
      image: "/html.jpg",
      description: "Create attractive and responsive web pages."
    },
    {
      name: "JavaScript",
      image: "/javascript.jpg",
      description: "Make websites interactive with JavaScript."
    },
    {
      name: "React JS",
      image: "/react.jpg",
      description: "Build modern user interfaces using React."
    },
    {
      name: "PHP & MySQL",
      image: "/php.jpg",
      description: "Develop dynamic websites connected to databases."
    }
  ];

  return (
<div>
    <Header />
    <Container fluid className="courses-page py-5">
      <Container>
        <h1 className="text-center fw-bold text-primary">
          Our Courses
        </h1>

        <p className="text-center text-muted mb-5">
          Explore our programming and web development courses.
        </p>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {courses.map((course, index) => (
            <Col key={index}>
              <Card className="course-card h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={course.image}
                  alt={course.name}
                  className="course-img"
                />

                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-primary">
                    {course.name}
                  </Card.Title>

                  <Card.Text>
                    {course.description}
                  </Card.Text>

                  <Button
                    variant="primary"
                    href="#contact"
                    className="mt-auto"
                  >
                    Enquire Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
    <Footer />
    </div>
  );
}

export default Courses;
