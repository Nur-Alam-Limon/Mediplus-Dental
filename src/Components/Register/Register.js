import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleReload = (e) => {
    e.preventDefault();
  };
  const auth = getAuth();
  const handleRegister = (e) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    signInWithEmailAndPassword(auth, email, pass).then((result) => {
      const user = result.user;
      console.log(result.user);
    });
    updateProfile(auth.currentUser, {
      displayName: "Jane Q. User",
    })
      .then(() => {})
      .catch((error) => {});
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    e.target.value = "";
  };

  const handlePass = (e) => {
    setPass(e.target.value);
    e.target.value = "";
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
