import React from "react";

import App from "./components/app";
import DataProvider from "./components/utils/DataProvider";

import getColorClass from "./components/utils/Color";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

const Algorand = props => {
  let { color } = props;

  return (
    <DataProvider>
      <App colorClass={getColorClass(color)} />
    </DataProvider>
  );
};

export default Algorand;
