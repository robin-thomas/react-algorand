import React, { useContext } from "react";

import { Row, Col } from "react-bootstrap";

import Content from "../app/Content";
import Input from "../utils/Input";
import { DataContext } from "../utils/DataProvider";

import "./TransferAmount.css";
import Logo from "../../assets/images/logo.png";

const TransferAmount = props => {
  const ctx = useContext(DataContext);

  const onChangeAmount = amount => {
    if (amount === null || amount === undefined || amount.trim().length === 0) {
      return {};
    }

    const validate =
      !isNaN(amount) &&
      Number(amount) > 0 &&
      (ctx.account &&
        Number(ctx.account.amount) / Math.pow(10, 6) > Number(amount));
    ctx.setValidation(validation => {
      return { ...validation, amount: validate, amountValue: amount };
    });
    return { validate };
  };

  return (
    <Content header="Transfer">
      <Row className="algorand-transferamount-footer">
        <Col xs="5" md="5" className="align-self-center">
          <Input
            hint="0.00"
            type="text"
            onChange={onChangeAmount}
            cls="algorand-transferto-input"
          />
        </Col>
        <Col xs="2" md="2" className="px-0 align-self-center">
          of
        </Col>
        <Col xs="5" md="5" className="align-self-center pl-0">
          <img src={Logo} alt="Logo" />
        </Col>
      </Row>
    </Content>
  );
};

export default TransferAmount;
