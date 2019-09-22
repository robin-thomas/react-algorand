import React from "react";

import { Row, Col } from "react-bootstrap";

import Content from "../app/Content";
import Input from "../utils/Input";

import "./TransferAmount.css";
import Logo from "../../assets/images/logo.png";

const TransferAmount = props => (
  <Content header="Transfer">
    <Row className="algorand-transferamount-footer">
      <Col xs="5" md="5" className="align-self-center">
        <Input hint="0.00" size="lg" type="number" />
      </Col>
      <Col xs="2" md="2" className="px-0 align-self-center">
        of
      </Col>
      <Col xs="5" md="5" className="align-self-center">
        <img src={Logo} alt="Logo" />
      </Col>
    </Row>
  </Content>
);

export default TransferAmount;
