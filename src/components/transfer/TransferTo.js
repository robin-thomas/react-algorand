import React from "react";

import { MDBBtn } from "mdbreact";
import { Row, Col } from "react-bootstrap";

import Input from "../utils/Input";

import "./TransferTo.css";

const TransferTo = props => (
  <div>
    <Row>
      <Col className="align-self-center">
        <Input label="To Address:" />
      </Col>
    </Row>
    <Row>
      <Col className="algorand-transferto-footer text-center">
        <MDBBtn color="danger">Transfer Now</MDBBtn>
      </Col>
    </Row>
  </div>
);

export default TransferTo;
