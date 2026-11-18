import Loginfooter from "./Loginfooter";
import { Container, Row, Col } from "react-bootstrap";
import Headerlogin from "./Headerlogin";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function Logout() {
    alert("Logout successfully!");
    navigate("/");
  }

  return (
    <>
    
     
      <Container fluid className="p-0">
        <Row className="g-0">

          {/* Left Side Menu */}
          <Col className="text-center">
            <Card className="rounded-0 h-100">

              <ListGroup variant="flush">
                <ListGroup.Item className="bg-secondary text-white">
                  <Nav.Link as={Link} to="/Loginpage" className="px-3">
                    Dashboard
                  </Nav.Link>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Nav.Link as={Link} to="/Studentlist" className="px-3">
                    Student list
                  </Nav.Link>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Nav.Link as={Link} to="/Courselist" className="px-3">
                    Course list
                  </Nav.Link>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Nav.Link as={Link} to="/Teacherlist" className="px-3">
                    Teacher list
                  </Nav.Link>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    size="sm"
                    variant="danger"
                    className="mt-1"
                    onClick={Logout}
                  >
                    Logout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

        </Row>
      </Container>

    
    </>
  );
}

export default Dashboard;