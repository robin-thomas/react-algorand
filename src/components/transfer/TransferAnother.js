import React, { useState } from "react";

import { MDBBtn } from "mdbreact";
import { Row, Col, Spinner } from "react-bootstrap";

import Content from "../app/Content";
import TransferAmount from "./TransferAmount";
import TransferTo from "./TransferTo";

import { DataConsumer } from "../utils/DataProvider";

import "./TransferAnother.css";

const Transfer = () => {
  const [disabled, setDisabled] = useState(true);

  const onClick = ctx => {
    ctx.setTxUrl(null);
  };

  return (
    <div>
      <DataConsumer>
        {ctx => (
          <Content header="Transfer">
            <Col
              xs="12"
              md="12"
              className="algorand-transferanother-spinner align-self-center text-center"
            >
              <Spinner
                animation={`${disabled ? "border" : null}`}
                size="lg"
                role="status"
                variant={ctx.colorClass}
              />
            </Col>
            <Col xs="12" md="12" className="align-self-center px-0">
              <a
                className="algorand-transferanother-url"
                href={ctx.txUrl}
                target="_blank"
              >
                {ctx.txUrl}
              </a>
            </Col>
          </Content>
        )}
      </DataConsumer>
      <div>
        <Row>
          <Col className="text-center">
            <DataConsumer>
              {ctx => (
                <MDBBtn color={ctx.colorClass} onClick={() => onClick(ctx)}>
                  Another?
                </MDBBtn>
              )}
            </DataConsumer>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Transfer;
