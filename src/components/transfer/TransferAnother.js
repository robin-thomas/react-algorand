import React, { useState, useEffect, useContext } from "react";

import { MDBBtn } from "mdbreact";
import { Row, Col, Spinner } from "react-bootstrap";

import Content from "../app/Content";

import Timer from "../utils/Timer";
import Algorand from "../utils/Algorand";
import { DataConsumer, DataContext } from "../utils/DataProvider";

import * as config from "../../config.json";

import "./TransferAnother.css";

const Transfer = () => {
  const [url, setUrl] = useState(null);

  const ctx = useContext(DataContext);

  useEffect(() => {
    const checkTxStatus = async () => {
      try {
        const txId = await Algorand.sendTransaction(ctx, ctx.tx);
        const url = config.algorand.explorer[ctx.network].replace(
          "{txId}",
          txId
        );
        setUrl(url);
      } catch (err) {
        alert(err.message);
      }
    };

    checkTxStatus();
  }, []);

  const onClick = ctx => {
    setUrl(null);
    ctx.setTx(null);
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
              {url ? (
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
            <Col
              xs="12"
              md="12"
              className="algorand-transferanother-col align-self-center px-0"
            >
              {url ? (
                <a
                  className="algorand-transferanother-url"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`${url.substr(0, 50)}...`}
                </a>
              ) : (
                <div>
                  <p className="algorand-transferanother-waiting">
                    <b>Avg waiting time: </b>
                  </p>
                  <Timer date={ctx.txScheduleDate} />
                  <p>Please dont close your browser</p>
                </div>
              )}
            </Col>
          </Content>
        )}
      </DataConsumer>
      {url ? (
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
      ) : null}
    </div>
  );
};

export default Transfer;
