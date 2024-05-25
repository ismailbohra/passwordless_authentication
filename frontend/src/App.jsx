import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
