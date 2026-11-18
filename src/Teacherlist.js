import { Col, Container, Row } from "react-bootstrap";
import Headerlogin from "./Headerlogin";
import Loginfooter from "./Loginfooter";
import Dashboard from "./Dashboard";
import Table from "react-bootstrap/Table";

function Teacherlist() {
  return (
    <div>
      <Headerlogin />

      <Container fluid className="p-0">
        <Row className="g-0">

          {/* Left Sidebar */}
          <Col xs={12} md={2}>
            <Dashboard />
          </Col>

          {/* Right Side Content */}
          <Col  md={10} className="p-3 text-center">
            <h4>Welcome to Teacher List</h4><br />

            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Teacher Name</th>
                  <th>Subject</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mr. Sharma</td>
                  <td>Computer Science</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Ms. Verma</td>
                  <td>Mathematics</td>
                </tr>
              </tbody>
            </Table>
          </Col>

        </Row>
      </Container>

      <Loginfooter />
    </div>
  );
}

export default Teacherlist;