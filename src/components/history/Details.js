import React from "react";

import { Row, Col } from "react-bootstrap";

import Detail from "./Detail";
import Content from "../app/Content";
import EmptyRow from "../utils/EmptyRow";

import "./Details.css";

const Details = ({ txs }) => (
  <Content header="History">
    <Row className="algorand-history-header">
      <Col>
        <span>Transactions in this session</span>
      </Col>
    </Row>
    {Object.keys(txs).map((key, index) => (
      <Detail key={index} tx={txs[key]} />
    ))}
    <EmptyRow />
  </Content>
);

export default Details;
