import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import firebaseInit from "../../Firebase/firebase.initialize";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

firebaseInit();

const provider = new GoogleAuthProvider();

const handleGoogleSignIn = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
  });
};

const Login = () => {
  return (
    <div>
      <div style={{ marginTop: "150px" }}></div>
      <h1 className="mx-auto w-50">Login Form</h1>
      <br />
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="mx-auto" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <div className="mx-auto w-50" style={{ marginBottom: "150px" }}>
        <button className="px-5 py-2" onClick={handleGoogleSignIn}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
