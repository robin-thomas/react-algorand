import * as algosdk from "algosdk";

const Algorand = {
  client: null,

  isValidAddress: address => {
    return algosdk.isValidAddress(address);
  },

  initClient: (apiKey, apiServer) => {
    if (Algorand.client === null) {
      let token = {
        "X-Algo-API-Token": apiKey
      };

      if (apiServer.search("purestake") >= 0) {
        token = {
          "X-API-Key": apiKey
        };
      }

      Algorand.client = new algosdk.Algod(token, apiServer, "" /* port */);
    }

    return Algorand.client;
  }
};

export default Algorand;
