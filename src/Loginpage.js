import { Col, Container, Row } from "react-bootstrap";
import Headerlogin from "./Headerlogin";
import Loginfooter from "./Loginfooter";
import Dashboard from "./Dashboard";
import { useLocation } from "react-router-dom";

function Loginpage() {
  return (
    <div>
      <Headerlogin />

      <Container fluid className="p-0">
        <Row className="g-0">

          {/* Left Side Menu */}
          <Col xs={12} md={2} style={{ minHeight: "28rem",minWidth: "110px" }}>
            <Dashboard />
          </Col>

          {/* Right Side Content */}
          <Col  md={10} className="p-4 text-center">
            <h3>Welcome to Dashboard</h3>
            <p>Select an option from the sidebar.</p>
          </Col>

        </Row>
      </Container>

      <Loginfooter />
    </div>
  );
}

export default Loginpage;