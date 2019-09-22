import React from "react";

import { Container } from "react-bootstrap";

import Transfer from "./components/transfer";
import DataProvider from "./components/utils/DataProvider";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./index.css";

const Algorand = props => {
  return (
    <DataProvider>
      <Container className="algorand-container">
        <Transfer />
      </Container>
    </DataProvider>
  );
};

export default Algorand;
