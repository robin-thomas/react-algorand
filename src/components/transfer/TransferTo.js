import React from "react";

import { MDBBtn } from "mdbreact";
import { Row, Col } from "react-bootstrap";

import Algorand from "../utils/Algorand";
import { DataConsumer } from "../utils/DataProvider";
import Input from "../utils/Input";

import "./TransferTo.css";

const TransferTo = props => {
  const onChange = address => {
    if (
      address === null ||
      address === undefined ||
      address.trim().length === 0
    ) {
      return {};
    }

    const validate = Algorand.isValidAddress(address);
    return { validate };
  };

  const onSubmit = e => {};

  return (
    <div>
      <Row>
        <Col className="align-self-center">
          <form onSubmit={onSubmit} noValidate>
            <Input
              label="To Address:"
              onChange={onChange}
              cls="algorand-transferto-input"
            />
          </form>
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
};

export default TransferTo;
