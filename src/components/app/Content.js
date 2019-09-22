import React from "react";

import { MDBIcon } from "mdbreact";
import { Container, Row, Col } from "react-bootstrap";

import { DataConsumer } from "../utils/DataProvider";

import "./Content.css";

const Content = ({ header, children }) => {
  const onClick = ctx => {
    ctx.setPage("home");
    ctx.setDisabled(true);
  };

  return (
    <Container className="algorand-content">
      <Row>
        <Col xs="9" md="9" className="px-0 algorand-content-header">
          {header}
        </Col>
        <Col xs="3" md="3">
          <DataConsumer>
            {ctx =>
              ctx.page !== "home" ? (
                <MDBIcon
                  icon="times"
                  className="algorand-content-close"
                  onClick={() => onClick(ctx)}
                />
              ) : (
                ""
              )
            }
          </DataConsumer>
        </Col>
      </Row>
      <Container>
        <Row className="algorand-content-footer">{children}</Row>
      </Container>
    </Container>
  );
};

export default Content;
