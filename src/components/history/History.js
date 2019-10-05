import React from "react";

import { DataConsumer } from "../utils/DataProvider";

import Details from "./Details";
import Transfer from "./Transfer";

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
