import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handlelogout = () => {
    navigate("/login");
  };

  return (
    <>
      <Container
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <h1>Welcome</h1>
        <Button variant="primary" type="submit" onClick={() => handlelogout()}>
          Logout
        </Button>
        <div className="mt-5">
          <p>
            <strong>
              Introducing SecureAuth: Your Path to Passwordless Authentication
            </strong>
          </p>
          <p>
            Welcome to SecureAuth, your gateway to a seamless and secure
            authentication experience. In today's digital landscape, the
            traditional username-password authentication method poses
            significant security risks. With SecureAuth, we're introducing a
            revolutionary approach to authentication: passwordless
            authentication powered by SimpleWebAuthn.
          </p>
          <p>
            <strong>What is SecureAuth?</strong>
          </p>
          <p>
            SecureAuth is a cutting-edge authentication platform designed to
            provide users with a secure and convenient way to access their
            accounts without the hassle of passwords. By leveraging the power of
            SimpleWebAuthn, SecureAuth offers a robust authentication solution
            that is both highly secure and user-friendly.
          </p>
          
          
          <p>
            <strong>How SecureAuth Works:</strong>
          </p>
          <ol>
            <li>
              <p>
                <strong>Registration:</strong> Users begin by registering their
                accounts with SecureAuth. During registration, users will be
                prompted to select their preferred authentication method, such
                as fingerprint, facial recognition, or security keys.
              </p>
            </li>
            <li>
              <p>
                <strong>Authentication:</strong> When logging in, users are
                authenticated using their chosen method. SecureAuth verifies the
                user's identity securely and seamlessly, without the need for
                passwords.
              </p>
            </li>
            <li>
              <p>
                <strong>Secure Access:</strong> With SecureAuth, users enjoy
                passwordless access to their accounts, enhancing both security
                and convenience.
              </p>
            </li>
          </ol>
        
          
    
        </div>
      </Container>
    </>
  );
}

export default Home;
