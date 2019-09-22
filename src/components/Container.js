import React, { useContext, useEffect } from "react";

import { Container } from "react-bootstrap";

import { DataContext } from "./utils/DataProvider";

import "./Container.css";

const AlgorandContainer = ({ colorClass, children }) => {
  const ctx = useContext(DataContext);
  useEffect(() => {
    ctx.setColorClass(colorClass);
    document.documentElement.style.setProperty(
      "--algorand-color",
      `var(--algorand-color-${colorClass})`
    );
  }, [colorClass]);

  return <Container className="algorand-container">{children}</Container>;
};

export default AlgorandContainer;
