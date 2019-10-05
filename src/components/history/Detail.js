import React from "react";

import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

import Algorand from "../utils/Algorand";
import { DataConsumer } from "../utils/DataProvider";
import Timer from "../utils/Timer";

import * as config from "../../config.json";

const Detail = ({ txn }) => {
  return (
    <Row className="algorand-history-header algorand-history-row">
      <Col md="auto">
        <DataConsumer>
          {ctx =>
            txn.status !== Algorand.status.PENDING ? (
              <div>
                <span>#&nbsp;</span>
                <a
                  target="_blank"
                  href={config.algorand.explorer[ctx.network].replace(
                    "{txId}",
                    txn.id
                  )}
                  title={config.algorand.explorer[ctx.network].replace(
                    "{txId}",
                    txn.id
                  )}
                  rel="noopener noreferrer"
                >
                  {txn.id.substr(0, 15)}...
                </a>
              </div>
            ) : (
              <span>{`# ${txn.id.substr(0, 15)}...`}</span>
            )
          }
        </DataConsumer>
      </Col>
      <Col md="auto" className="ml-auto pl-0">
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip>
              <Timer date={txn.date} />
            </Tooltip>
          }
        >
          <span>
            {txn.status === Algorand.status.PENDING ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : txn.status === Algorand.status.SUCCESS ? (
              <i className="fas fa-check"></i>
            ) : (
              <i className="fas fa-times"></i>
            )}
          </span>
        </OverlayTrigger>
      </Col>
    </Row>
  );
};

export default Detail;
