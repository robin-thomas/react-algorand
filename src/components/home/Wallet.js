import React from "react";

import { MDBBtn } from "mdbreact";
import { Row, Col } from "react-bootstrap";

import { DataConsumer } from "../utils/DataProvider";

const Wallet = props => {
  const onClick = ctx => {
    ctx.setDisabled(false);
    ctx.setPage("login");
  };

  return (
    <div>
      <Row>
        <Col className="text-center">
          <DataConsumer>
            {ctx => (
              <MDBBtn color={ctx.colorClass} onClick={() => onClick(ctx)}>
                Connect Wallet
              </MDBBtn>
            )}
          </DataConsumer>
        </Col>
      </Row>
    </div>
  );
};

export default Wallet;
