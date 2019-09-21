import React from "react";

import { MDBIcon } from "mdbreact";
import { Container, Row, Col } from "react-bootstrap";

import DataProvider from "./components/DataProvider";
import Input from "./components/Input";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Algorand = props => {
  return (
    <DataProvider>
      <Container>
        <Row>
          <Col xs="12" md="5" className="align-self-center">
            <Input hint="from" />
          </Col>
          <Col md="2" className="px-0 align-self-center d-none d-sm-block">
            <MDBIcon icon="arrow-right" />
          </Col>
          <Col xs="12" md="5" className="align-self-center">
            <Input hint="to" />
          </Col>
        </Row>
      </Container>
    </DataProvider>
  );
};

export default Algorand;
