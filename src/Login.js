
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useLocation } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
const usernames = ["Admin", "Naresh", "Student", "Teacher"];
const passwords = ["Adm123", "Nar123", "stu123", "tea123"];
localStorage.setItem("username",username)

 function Login1(e) {
  e.preventDefault();

  let found = false;

  for (let i = 0; i < usernames.length; i++) {
    if (
      username === usernames[i] &&
      password === passwords[i]
    ) {
      found = true;
      break;
    }
  }

  if (found) {
    setMessage("");
    navigate("/Loginpage",{
    state: { username: username }
  });
}
   else {
    setMessage("Invalid username or password!");
  }
}

  return (
   <div>
    <Header /> 
    <Container
      fluid
      className="d-flex justify-content-center align-items-center bg-light py-3"
      style={{ minHeight: "100vh" }}
    >
      <Card
        className="shadow border-1"
        style={{ width: "90%", maxWidth: "400px"}}
      >
        <Card.Body className="p-4 p-md-5">

          {/* Logo and Heading */}
          <div className="text-center mb-3">
            <img
              src="/Logo2.png"
              alt="Softech Logo"
              style={{
                width: "90px",
                height: "90px",
                objectFit: "contain"
              }}
            />

            <h3 className="fw-bold mt-2">SOFTECH</h3>
            <p className="text-muted">Login to your account</p>
          </div>

          {/* Error Message */}
          {message && (
            <Alert variant="danger">
              {message}
            </Alert>
          )}

          <Form onSubmit={Login1}>
            {/* Username */}
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </Form.Group>

            {/* Show Password */}
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Show Password"
                checked={showPassword}
                onChange={(e) =>
                  setShowPassword(e.target.checked)
                }
              />
            </Form.Group>

            {/* Login Button */}
            <Button
              type="submit"
              variant="dark"
              className="w-100 fw-bold"
            >
              Login
            </Button>
          </Form>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <small className="text-muted">
              Forgot your password? Contact the administrator.
            </small>
          </div>

        </Card.Body>
      </Card>
    </Container>
    </div>
  );
}

export default Login;
