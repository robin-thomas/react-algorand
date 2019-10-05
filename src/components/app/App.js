import React, { useContext, useEffect } from "react";

import { Container } from "react-bootstrap";

import Worker from "./app.worker.js";
import getComponent from "./Component";
import { DataContext } from "../utils/DataProvider";

import "./App.css";

const App = ({ colorClass }) => {
  const ctx = useContext(DataContext);

  // Initialize the web worker for processing transactions.
  useEffect(() => {
    const worker = new Worker();

    worker.onmessage = e => {
      const tx = e.data;

      ctx.setTxs(txs => {
        let _txs = { ...txs };

        if (tx.dummyId !== undefined) {
          if (_txs[tx.dummyId] === undefined) {
            _txs[tx.dummyId] = tx;
          } else {
            delete _txs[tx.dummyId];
            _txs[tx.txId] = tx;
          }
        } else {
          _txs[tx.txId] = tx;
        }

        return _txs;
      });
    };

    ctx.setWorker(worker);
  }, []);

  // Update the theme when required.
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
