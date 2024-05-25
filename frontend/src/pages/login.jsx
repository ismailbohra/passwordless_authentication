import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./login.css";

import BackgroundImage from "../assets/background.png";
import Logo from "../assets/react.svg";
import { useNavigate } from "react-router-dom";
import { startAuthentication } from "@simplewebauthn/browser";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl1 = "http://localhost:4000/login";
    const apiUrl2 = "http://localhost:4000/loginverify";
    const origin = window.location.origin;

    try {
      const response = await fetch(apiUrl1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: inputUsername }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
        setShow(true);
      }

      const challengeResult = await response.json();
      const { options } = challengeResult;

      const authenticationResult = await startAuthentication(options);
      console.log(authenticationResult);

      const verifcationresponse = await fetch(apiUrl2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username:inputUsername, cred: authenticationResult,origin }),
      });

      if (!verifcationresponse.ok) {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
        setShow(true);
      }
      
      navigate('/');

    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
        />
        <div className="h4 mb-2 text-center">Sign In</div>
        {/* ALert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect username.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-5" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>

        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}
      </Form>
    </div>
  );
};

export default Login;
