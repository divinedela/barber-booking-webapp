import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Container className="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
