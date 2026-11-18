
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
import Header from "./Header";



function Contact() {
  return (
    <div> 
      <Header />
    <Container fluid className="bg-light py-5">
      <Container>
        <h1 className="text-center text-primary fw-bold">
          Contact Us
        </h1>

        <p className="text-center text-secondary mb-5">
          Get in touch with Softech Solutions.
        </p>

        <Row className="g-4">
          {/* Contact Information */}
          <Col xs={12} md={5}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="p-4">
                <h3 className="text-primary mb-4">
                  Get In Touch
                </h3>

                <h5>
                  <span className="me-2">📍</span>
                  Address
                </h5>
                <p className="text-secondary">
                  Add your company address here.
                </p>

                <h5>
                  <span className="me-2">📞</span>
                  Phone
                </h5>
                <p className="text-secondary">
                  Add your contact number here.
                </p>

                <h5>
                  <span className="me-2">✉️</span>
                  Email
                </h5>
                <p className="text-secondary">
                  Add your email address here.
                </p>

                <h5>
                  <span className="me-2">🕒</span>
                  Working Hours
                </h5>
                <p className="text-secondary">
                  Monday - Saturday
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col xs={12} md={7}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4">
                <h3 className="mb-4">Send Us a Message</h3>

                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Form submitted successfully!");
                  }}
                >
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your message"
                      required
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100" 
                  href="https://wa.me/9813858368" target="_blank"   rel="noopener noreferrer">
                    Send Message
                  </Button>
                </Form>
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

export default Contact;
