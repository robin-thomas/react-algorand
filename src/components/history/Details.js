import React from "react";

import { Row, Col } from "react-bootstrap";

import Algorand from "../utils/Algorand";
import Detail from "./Detail";
import Content from "../app/Content";
import EmptyRow from "../utils/EmptyRow";

import "./Details.css";

const Details = props => {
  const txns = [
    {
      id: "12345678866666666",
      date: new Date("2019-10-05 17:00:00"),
      status: Algorand.status.PENDING
    },
    {
      id: "12345678866666666",
      date: new Date(),
      status: Algorand.status.SUCCESS
    },
    {
      id: "12345678866666666",
      date: new Date(),
      status: Algorand.status.FAILED
    }
  ];

  return (
    <Content header="History">
      <Row className="algorand-history-header">
        <Col>
          <span>Transactions in this session</span>
        </Col>
      </Row>
      {txns.map((txn, index) => (
        <Detail key={index} txn={txn} />
      ))}
      <EmptyRow />
    </Content>
  );
};

export default Details;
