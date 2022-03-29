import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Copyright = () => {
  return (
    <Row className="copyright-section">
      <Col>
        <p>
          &copy; {new Date().getFullYear()} .Danny the Barber. Created by{" "}
          <a href="#">Divine Dela</a>
        </p>
      </Col>
    </Row>
  );
};

export default Copyright;
