import * as algosdk from "algosdk";

import * as config from "../../config.json";

const Algorand = {
  isValidAddress: address => {
    return algosdk.isValidAddress(address);
  },

  getClient: ctx => {
    let token = {
      "X-Algo-API-Token": config.algorand.api[ctx.network].key
    };

    if (config.algorand.api[ctx.network].server.search("purestake") >= 0) {
      token = {
        "X-API-Key": config.algorand.api[ctx.network].key
      };
    }

    return new algosdk.Algod(
      token,
      config.algorand.api[ctx.network].server,
      config.algorand.api[ctx.network].port
    );
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

  getAccount: async (ctx, address) => {
    return await Algorand.getClient(ctx).accountInformation(address);
  }
};

export default Algorand;
