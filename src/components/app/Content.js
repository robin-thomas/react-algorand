import React from "react";

import { MDBIcon } from "mdbreact";
import { Container, Row, Col } from "react-bootstrap";

import { DataConsumer } from "../utils/DataProvider";

import "./Content.css";

const Content = ({ header, children }) => {
  const logout = ctx => {
    if (confirm("Are you sure you want to logout?")) {
      ctx.setDisabled(true);
      ctx.setPage("home");
      ctx.setWallet(null);
      ctx.setAccount(null);
      ctx.setNetwork("testnet");
      ctx.setValidation({
        amount: false,
        toAddress: false
      });
    }
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
                  onClick={() => logout(ctx)}
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
