import React from "react";

import { DataConsumer } from "../utils/DataProvider";

import TransferAmount from "./TransferAmount";
import TransferTo from "./TransferTo";
import TransferAnother from "./TransferAnother";

const Transfer = props => (
  <div>
    <DataConsumer>
      {ctx =>
        ctx.txUrl ? (
          <TransferAnother />
        ) : (
          <div>
            <TransferAmount />
            <TransferTo />
          </div>
        )
      }
    </DataConsumer>
  </div>
);

export default Transfer;
