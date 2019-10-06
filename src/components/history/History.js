import React from "react";

import { Row, Col } from "react-bootstrap";

import Transfer from "./Transfer";
import Detail from "./Detail";
import Content from "../app/Content";

import { DataConsumer } from "../utils/DataProvider";
import EmptyRow from "../utils/EmptyRow";

import "./History.css";

const History = props => (
  <div>
    <Content header="History">
      <Row className="algorand-history-header">
        <Col>
          <span>Transactions in this session</span>
        </Col>
      </Row>
      <DataConsumer>
        {ctx =>
          ctx.txs && ctx.txs.length > 0 ? (
            <div>
              {Object.keys(ctx.txs).map((key, index) => (
                <Detail key={index} tx={ctx.txs[key]} />
              ))}
              <EmptyRow />
            </div>
          ) : (
            <div>
              <EmptyRow />
              <Row className="algorand-history-row">
                <Col>
                  <i class="fas fa-coins"></i>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "15px"
                    }}
                  >
                    Nothing here! Make one transaction :)
                  </p>
                </Col>
              </Row>
              <EmptyRow />
            </div>
          )
        }
      </DataConsumer>
    </Content>
    <Transfer />
  </div>
);

export default History;
