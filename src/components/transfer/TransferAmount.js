import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Input from "../utils/Input";

import "./TransferAmount.css";
import Logo from "../../assets/images/logo.png";

const TransferAmount = props => (
  <Container className="algorand-transferamount">
    <Row>
      <Col xs="9" md="9" className="px-0 algorand-transferamount-header-col">
        Transfer
      </Col>
      <Col xs="3" md="3">
        &nbsp;
      </Col>
    </Row>
    <Row className="algorand-transferamount-footer">
      <Col xs="5" md="5" className="align-self-center">
        <Input hint="0.00" size="lg" />
      </Col>
      <Col xs="2" md="2" className="px-0 align-self-center">
        of
      </Col>
      <Col xs="5" md="5" className="align-self-center">
        <img src={Logo} alt="Logo" />
      </Col>
    </Row>
  </Container>
);

export default TransferAmount;
