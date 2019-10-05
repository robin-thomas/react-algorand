import React from "react";

import { MDBBtn } from "mdbreact";
import { Row, Col } from "react-bootstrap";

import { DataConsumer } from "../utils/DataProvider";

const Transfer = props => {
  const onClick = ctx => {
    ctx.setDisabled(false);
    ctx.setPage("transfer");
    ctx.setTxDate(new Date());
  };

  return (
    <div>
      <Row>
        <Col className="text-center">
          <DataConsumer>
            {ctx => (
              <MDBBtn color={ctx.colorClass} onClick={() => onClick(ctx)}>
                Transfer
              </MDBBtn>
            )}
          </DataConsumer>
        </Col>
      </Row>
    </div>
  );
};

export default Transfer;
