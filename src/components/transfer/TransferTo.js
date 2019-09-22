import React from "react";

import { MDBBtn } from "mdbreact";
import { Row, Col } from "react-bootstrap";

import { DataConsumer } from "../utils/DataProvider";
import Input from "../utils/Input";

const TransferTo = props => (
  <div>
    <Row>
      <Col className="align-self-center">
        <Input label="To Address:" />
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <DataConsumer>
          {ctx => <MDBBtn color={ctx.colorClass}>Transfer Now</MDBBtn>}
        </DataConsumer>
      </Col>
    </Row>
  </div>
);

export default TransferTo;
