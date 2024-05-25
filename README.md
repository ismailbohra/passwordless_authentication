

---

# Passwordless Authentication Web App

## Overview

This project is a basic web application that implements passwordless authentication, inspired by SimpleWebAuth. The primary goal is to enhance user security and experience by eliminating the need for traditional passwords. Instead, the application uses public key cryptography and biometric authentication for a seamless and secure login process.

## Features

- **User Registration**: Users can register by entering a username. The registration process involves creating a challenge on the server and generating a unique cryptographic key pair on the client.
- **Passwordless Login**: Users can log in using biometric methods such as facial recognition, fingerprint scanning, or other physical devices.
- **Secure Authentication**: Utilizes public and private key pairs to ensure robust security.

## How It Works

### Registration

1. **User Initiates Registration**:
    - The user enters their username on the registration page and clicks the "Register" button.

2. **Server Creates Challenge**:
    - The server generates a cryptographic challenge and sends it to the client.

3. **Client Generates Key Pair**:
    - The client device generates a unique public-private key pair.
    - The public key is sent back to the server, while the private key remains securely on the client device.

4. **Server Verifies and Stores Public Key**:
    - The server verifies the received public key and stores it in the database associated with the user's account.

### Login

1. **User Initiates Login**:
    - The user navigates to the login page and chooses to log in using biometric authentication.

2. **Server Sends Challenge**:
    - The server sends a new cryptographic challenge to the client.

3. **Client Authenticates**:
    - The client uses the private key to sign the challenge. This process often involves user biometric verification (face, fingerprint, etc.).

4. **Server Verifies Response**:
    - The server verifies the signed response using the stored public key.
    - If the verification is successful, the user is authenticated and redirected to the home page.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```sh
    git clone [Your Repository URL]
    cd [Your Repository Directory]
    ```
3. create .env file and add your mongodb url 
2. Install dependencies:
    ```sh
    cd backend
    npm install
    cd frontend
    npm install
    ```

3. Start the server:
    ```sh
    cd frontend
    npm run dev
    cd backend
    node index.js
    ```

4. Open your browser and navigate to `http://localhost:5173/register`.

## Usage

1. **Register a new user**:
    - Navigate to the registration page (`/register`).
    - Enter a username and click "Register".
    - Follow the prompts to complete the registration process.

2. **Login**:
    - Navigate to the login page (`/login`).
    - Use your registered biometric method to log in.
    - Upon successful authentication, you will be redirected to the home page.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

---
