import React from "react";

import DataProvider from "./components/DataProvider";
import Input from "./components/Input";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Algorand = props => {
  return (
    <DataProvider>
      <Input />
    </DataProvider>
  );
};

export default Algorand;
