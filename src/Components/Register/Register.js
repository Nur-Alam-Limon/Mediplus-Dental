import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useLocation, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const handleReload = (e) => {
    e.preventDefault();
  };
  const auth = getAuth();
  const handleRegister = (e) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        history.push(redirect_url);
        setError("");
        console.log(auth.currentUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <div>
      <div style={{ marginTop: "150px" }}></div>
      <h1 className="mx-auto w-50">Registration Form</h1>
      <br />
      <Form className="w-50 mx-auto" onSubmit={handleReload}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePass}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button
          onClick={handleRegister}
          className="mx-auto"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </Form>
      <br />
      <div className="mx-auto w-50" style={{ marginBottom: "150px" }}>
        <Link to="/login">
          <p className="py-3 fs-6">Already Registered? Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
