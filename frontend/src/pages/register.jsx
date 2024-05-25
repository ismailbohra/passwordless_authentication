import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./login.css";

import BackgroundImage from "../assets/background.png";
import Logo from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

import { startRegistration } from "@simplewebauthn/browser";

const Register = () => {
  const [inputUsername, setInputUsername] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl1 = "http://localhost:4000/register";
    const apiUrl2 = "http://localhost:4000/verifyregister";
    const origin = window.location.origin;
    try {
      const response1 = await fetch(apiUrl1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputUsername,
        }),
      });

      if (!response1.ok) {
        const errorData = await response1.json();
        console.error("Register failed:", errorData.message);
      }

      const resp = await response1.json();

      let attResp;
      try {
        attResp = await startRegistration(resp.option);
      } catch (error) {
        console.log("Register failed:", error);
      }
      const verificationResp = await fetch(apiUrl2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: inputUsername, attResp, origin }),
      });

      const verificationJSON = await verificationResp.json();

      if (verificationJSON && verificationJSON.verified) {
        navigate("/login");
      } else {
        throw new Error("something went wrong");
      }
    } catch (error) {
      console.error("Error during Register:", error);
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
        <div className="h4 mb-2 text-center">Register</div>
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
        <Form.Group className="mb-2" controlId="username">
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
            Register
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            ...
          </Button>
        )}
      </Form>
    </div>
  );
};

export default Register;
