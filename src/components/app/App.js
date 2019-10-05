import React, { useContext, useEffect } from "react";

import { Container } from "react-bootstrap";

import getComponent from "./Component";
import { DataContext } from "../utils/DataProvider";

import "./App.css";

const App = ({ colorClass }) => {
  const ctx = useContext(DataContext);

  useEffect(() => {
    ctx.setColorClass(colorClass);
    document.documentElement.style.setProperty(
      "--algorand-color",
      `var(--algorand-color-${colorClass})`
    );
  }, [ctx.setColorClass, colorClass]);

  return (
    <Container fluid={true} className="algorand-container">
      {getComponent(ctx.page)}
    </Container>
  );
};

export default App;
