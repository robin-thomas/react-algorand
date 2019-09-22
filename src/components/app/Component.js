import React from "react";

import Home from "../home";
import Transfer from "../transfer";

const getComponent = page => {
  switch (page) {
    case "transfer":
      return <Transfer />;

    case "home":
    default:
      return <Home />;
  }
};

export default getComponent;
