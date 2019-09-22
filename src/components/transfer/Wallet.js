import React from "react";

import { MDBBtn } from "mdbreact";
import { Row, Col } from "react-bootstrap";

import { DataConsumer } from "../utils/DataProvider";
import Input from "../utils/Input";

import "./TransferTo.css";

const TransferTo = props => (
  <div>
    <Row>
      <Col className="algorand-transferto-footer text-center">
        <DataConsumer>
          {ctx => <MDBBtn color={ctx.colorClass}>Connect Wallet</MDBBtn>}
        </DataConsumer>
      </Col>
    </Row>
  </div>
);

export default TransferTo;
