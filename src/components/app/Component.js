import React from "react";

import Home from "../home";
import Login from "../login";
import History from "../history";
import Transfer from "../transfer";

const getComponent = page => {
  switch (page) {
    case "transfer":
      return <Transfer />;

    case "login":
      return <Login />;

    case "history":
      return <History />;

    case "home":
    default:
      return <Home />;
  }
};

export default getComponent;
