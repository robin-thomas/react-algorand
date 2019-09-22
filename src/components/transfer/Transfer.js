import React from "react";

import TransferAmount from "./TransferAmount";
import TransferTo from "./TransferTo";

const Transfer = props => {
  return (
    <div>
      <TransferAmount />
      <TransferTo />
    </div>
  );
};

export default Transfer;
