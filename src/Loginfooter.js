import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Loginfooter() {
  return (
    <footer className="bg-dark text-white mt-auto py-3">
      <Container fluid >
        <Row className="align-items-center text-center ">

          <Col xs={12} md={12}>
            <p className="mb-1">
              &copy; {new Date().getFullYear()} SOFTECH
            </p>
            <small>All Rights Reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Loginfooter;