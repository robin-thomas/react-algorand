import React from "react";

import TransferAmount from "./TransferAmount";
import TransferTo from "./TransferTo";
import Wallet from "./Wallet";

import { DataConsumer } from "../utils/DataProvider";

const Transfer = props => {
  return (
    <div>
      <TransferAmount />
      <DataConsumer>
        {ctx => (ctx.walletConnected ? <TransferTo /> : <Wallet />)}
      </DataConsumer>
    </div>
  );
};

export default Transfer;
