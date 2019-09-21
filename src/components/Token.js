import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Input from "./Input";

import "./Token.css";

import Logo from "./logo.png";

const Token = props => (
  <Container className="algorand-token">
    <Row>
      <Col xs="9" md="9" className="px-0 algorand-token-header-col">
        Transfer
      </Col>
      <Col xs="3" md="3">
        &nbsp;
      </Col>
    </Row>
    <Row className="algorand-token-footer">
      <Col xs="5" md="5" className="align-self-center">
        <Input hint="0.00" size="lg" />
      </Col>
      <Col
        xs="2"
        md="2"
        className="px-0 align-self-center"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        of
      </Col>
      <Col xs="5" md="5" className="align-self-center">
        <img src={Logo} alt="Logo" />
      </Col>
    </Row>
  </Container>
);

export default Token;
