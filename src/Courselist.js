import { Col, Container, Row } from "react-bootstrap";
import Headerlogin from "./Headerlogin";
import Loginfooter from "./Loginfooter";
import Dashboard from "./Dashboard";
import Table from "react-bootstrap/Table";

function Courselist() {
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
            <h4>Welcome to Course List</h4>

            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course Name</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>BCA</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>MCA</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>B.Tech</td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>MBA</td>
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

export default Courselist;