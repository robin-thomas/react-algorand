import React from "react";

import { MDBIcon, MDBBtn } from "mdbreact";
import { Container, Row, Col } from "react-bootstrap";

import DataProvider from "./components/DataProvider";
import Token from "./components/Token";
import Input from "./components/Input";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./index.css";

const Algorand = props => {
  return (
    <DataProvider>
      <Container className="algorand-container" style={{ width: "250px" }}>
        <Token />
        <Row>
          <Col className="align-self-center">
            <Input label="To Address:" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center" style={{ marginBottom: "10px" }}>
            <MDBBtn color="danger">Transfer Now</MDBBtn>
          </Col>
        </Row>
      </Container>
    </DataProvider>
  );
};

export default Algorand;
