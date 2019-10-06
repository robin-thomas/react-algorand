import React from "react";

import Details from "./Details";
import Transfer from "./Transfer";

import { DataConsumer } from "../utils/DataProvider";

const History = props => (
  <DataConsumer>
    {ctx => (
      <div>
        <Details txs={ctx.txs} />
        <Transfer />
      </div>
    )}
  </DataConsumer>
);

export default History;
