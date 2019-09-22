import React from "react";

import TransferAmount from "../transfer/TransferAmount";
import Wallet from "./Wallet";

const Home = props => {
  return (
    <div>
      <TransferAmount />
      <Wallet />
    </div>
  );
};

export default Home;
