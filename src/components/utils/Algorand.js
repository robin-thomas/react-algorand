import * as algosdk from "algosdk";

const Algorand = {
  isValidAddress: address => {
    return algosdk.isValidAddress(address);
  }
};

export default Algorand;
