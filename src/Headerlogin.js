import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';

function Loginhead() {
  const location = useLocation();
  const [name,setname]=useState(()=>localStorage.getItem("username")||"")
  const navigate = useNavigate();

  function Logout() {
    alert("Logged out successfully!");
    navigate("/");
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="m-0 p-0">
      <Container fluid className="m-0 p-0">

        {/* Logo and Company Name */}
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center gap-2 m-0 p-0"
        >
          <img
            src="/Logo2.png"
            alt="Softech Logo"
            style={{
              width: "65px",
              height: "65px",
              objectFit: "contain"
            }}
          />

          <span className="fw-bold">SOFTECH</span>
        </Navbar.Brand>

        {/* Username and Logout on the Right */}
        <div className="ms-auto me-3 d-flex flex-column align-items-end">
          <span className="text-white fw-bold">
          <h4>Welcome</h4> 
          <h5>{name}</h5>
          </span>

          <Button
            size="sm"
            className="mt-1"
            onClick={Logout}
          >
            Logout
          </Button>
        </div>

      </Container>
    </Navbar>
  );
}

export default Loginhead;
