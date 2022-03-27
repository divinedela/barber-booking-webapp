import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Book Barber</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
