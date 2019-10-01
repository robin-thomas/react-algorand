import React, { useState, useEffect, useContext } from "react";

import { MDBBtn } from "mdbreact";
import { Row, Col, Spinner } from "react-bootstrap";

import Content from "../app/Content";
import TransferAmount from "./TransferAmount";
import TransferTo from "./TransferTo";

import Algorand from "../utils/Algorand";
import { DataConsumer, DataContext } from "../utils/DataProvider";

import "./TransferAnother.css";

const Transfer = () => {
  const [success, setSuccess] = useState(false);

  const ctx = useContext(DataContext);

  useEffect(() => {
    const checkTxStatus = async () => {
      const txId = ctx.txUrl.substr(ctx.txUrl.lastIndexOf("/") + 1);
      await Algorand.checkTxStatus(ctx, txId);
      setSuccess(true);
    };

    checkTxStatus();
  }, []);

  const onClick = ctx => {
    setSuccess(false);
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
              {success ? (
                <i className="fas fa-check"></i>
              ) : (
                <Spinner
                  animation="border"
                  size="lg"
                  role="status"
                  variant={ctx.colorClass}
                />
              )}
            </Col>
            <Col xs="12" md="12" className="align-self-center px-0">
              <a
                className="algorand-transferanother-url"
                href={ctx.txUrl}
                target="_blank"
              >
                {`${ctx.txUrl.substr(0, 50)}...`}
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
