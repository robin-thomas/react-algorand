import React from "react";

import { MDBBtn } from "mdbreact";
import { Row, Col } from "react-bootstrap";

import Content from "../app/Content";
import { DataConsumer } from "../utils/DataProvider";
import Input from "../utils/Input";

const Home = props => {
  const onClick = ctx => {
    ctx.setPage("transfer");
  };

  return (
    <div>
      <Content header="Login">
        <Row></Row>
      </Content>
      <Row>
        <Col className="text-center">
          <DataConsumer>
            {ctx => (
              <MDBBtn color={ctx.colorClass} onClick={() => onClick(ctx)}>
                Login
              </MDBBtn>
            )}
          </DataConsumer>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
