import React from "react";

import Container from "./components/Container";
import Transfer from "./components/transfer";
import DataProvider from "./components/utils/DataProvider";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

const Algorand = props => {
  let { color } = props;
  switch (color) {
    case "danger":
    case "primary":
    case "info":
    case "warning":
    case "secondary":
    case "success":
    case "dark":
      break;

    default:
      color = "danger";
  }

  return (
    <DataProvider>
      <Container colorClass={color}>
        <Transfer />
      </Container>
    </DataProvider>
  );
};

export default Algorand;
