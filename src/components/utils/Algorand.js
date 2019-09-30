import * as algosdk from "algosdk";

import * as config from "../../config.json";

const Algorand = {
  client: null,

  isValidAddress: address => {
    return algosdk.isValidAddress(address);
  },

  getClient: (apiKey, apiServer, port) => {
    if (Algorand.client === null) {
      let token = {
        "X-Algo-API-Token": apiKey ? apiKey : config.algorand.api.key
      };

      if (apiServer && apiServer.search("purestake") >= 0) {
        token = {
          "X-API-Key": apiKey
        };
      }

      Algorand.client = new algosdk.Algod(
        token,
        apiServer ? apiServer : config.algorand.api.host,
        port ? port : config.algorand.api.port
      );
    }

    return Algorand.client;
  },

  createWallet: () => {
    const key = algosdk.generateAccount();
    const mnemonic = algosdk.secretKeyToMnemonic(key.sk);

    return { address: key.addr, mnemonic, sk: key.sk };
  },

  getWallet: mnemonic => {
    const key = algosdk.mnemonicToSecretKey(mnemonic);

    if (!algosdk.isValidAddress(key.addr)) {
      throw new Error("Invalid wallet mnemonic!");
    }

    return { address: key.addr, mnemonic, sk: key.sk };
  },

  getAccount: async address => {
    const tx = await Algorand.getClient().accountInformation(address);
    console.log(tx);
  }
};

export default Algorand;
