import React, { useEffect, useContext } from "react";

import { MDBBtn } from "mdbreact";
import { Row, Col, Form } from "react-bootstrap";

import Algorand from "../utils/Algorand";
import { DataConsumer, DataContext } from "../utils/DataProvider";
import Input from "../utils/Input";
import Logo from "../../assets/images/logo.png";

import * as config from "../../config.json";

import "./TransferTo.css";

const TransferTo = props => {
  const networks = Object.keys(config.algorand.api);

  const ctx = useContext(DataContext);

  useEffect(() => {
    Algorand.getAccount(ctx, ctx.wallet.address).then(ctx.setAccount);
  }, [ctx.network]);

  const onChangeAddress = address => {
    if (
      address === null ||
      address === undefined ||
      address.trim().length === 0
    ) {
      return {};
    }

    const validate = Algorand.isValidAddress(address);
    ctx.setValidation(validation => {
      return { ...validation, toAddress: validate };
    });
    return { validate };
  };

  const transfer = e => {
    console.log("hello");
  };

  return (
    <div>
      <Row>
        <Col className="align-self-center">
          <DataConsumer>
            {ctx => (
              <p className="algorand-transferto-balance-p">
                Balance:{" "}
                {ctx.account ? ctx.account.amount / Math.pow(10, 6) : "0.00"}
                &nbsp;
                <img src={Logo} alt="Logo" width="12px" height="12px" />
              </p>
            )}
          </DataConsumer>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataConsumer>
            {ctx => (
              <Form.Control
                as="select"
                size="sm"
                value={ctx.network}
                onChange={e => ctx.setNetwork(e.target.value)}
              >
                {networks.map((network, index) => (
                  <option key={index} value={network}>
                    {network}
                  </option>
                ))}
              </Form.Control>
            )}
          </DataConsumer>
        </Col>
      </Row>
      <Row>
        <Col className="align-self-center">
          <form className="algorand-transferto-form" noValidate>
            <Input
              label="To Address:"
              onChange={onChangeAddress}
              cls="algorand-transferto-input"
            />
          </form>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <DataConsumer>
            {ctx => (
              <MDBBtn
                color={ctx.colorClass}
                onClick={transfer}
                disabled={!ctx.validation.amount || !ctx.validation.toAddress}
              >
                Transfer Now
              </MDBBtn>
            )}
          </DataConsumer>
        </Col>
      </Row>
    </div>
  );
};

export default TransferTo;
