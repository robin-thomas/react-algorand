import * as algosdk from "algosdk";

import * as config from "../../config.json";

const Algorand = {
  status: {
    PENDING: 0,
    SUCCESS: 1,
    FAILED: 2
  },

  isValidAddress: address => {
    return algosdk.isValidAddress(address);
  },

  getClient: network => {
    let token = {
      "X-Algo-API-Token": config.algorand.api[network].key
    };

    if (config.algorand.api[network].server.search("purestake") >= 0) {
      token = {
        "X-API-Key": config.algorand.api[network].key
      };
    }

    return new algosdk.Algod(
      token,
      config.algorand.api[network].server,
      config.algorand.api[network].port
    );
  },

  getClientForTx: network => {
    let token = {
      "X-API-Key": config.algorand.api[network].key,
      "Content-Type": "application/x-binary"
    };

    return new algosdk.Algod(
      token,
      config.algorand.api[network].server,
      config.algorand.api[network].port
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

  getAccount: async (network, address) => {
    return await Algorand.getClient(network).accountInformation(address);
  },

  createTransaction: async (network, { to, amount, memo, date }) => {
    let tx = await Algorand.getClient(network).getTransactionParams();
    tx.to = to;
    tx.amount = Number(amount) * Math.pow(10, 6); // convert to micro-algos.
    tx.genesisHash = tx.genesishashb64;

    const now = new Date().getTime();
    let lastRound = tx.lastRound;

    // Transaction to be processed in the future.
    if (date.getTime() > now) {
      // 1 block per 4.5s.
      const seconds = (date.getTime() - now) / 1000;
      const blocks = Math.ceil(seconds / 4.5);
      tx.firstRound = lastRound + blocks;
      tx.lastRound = lastRound + blocks + parseInt(1000);
      console.log(`Need to wait for ${blocks} blocks`);
    } else {
      tx.firstRound = lastRound;
      tx.lastRound = lastRound + parseInt(1000);
    }

    if (memo !== undefined) {
      tx.note = algosdk.encodeObj(memo);
    }

    return tx;
  },

  sendTransaction: async (network, tx, secretKey) => {
    try {
      let txParams = await Algorand.getClient(network).getTransactionParams();
      let lastRound = txParams.lastRound;

      if (tx.firstRound <= lastRound && lastRound <= tx.lastRound) {
        const signedTx = algosdk.signTransaction(tx, secretKey);
        const txResponse = await Algorand.getClientForTx(
          network
        ).sendRawTransaction(signedTx.blob);

        console.log(`Sent the transaction: ${txResponse.txId}`);

        await Algorand.checkTxStatus(network, txResponse.txId);

        return txResponse.txId;
      }

      // wait for atleast 4.5 seconds and try again.
      await Algorand.sleep(4500);
    } catch (err) {
      console.log(err);
      console.log("Failed to make an algorand transaction!");
    }

    return await Algorand.sendTransaction(network, tx, secretKey);
  },

  sleep: ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  checkTxStatus: async (network, txId) => {
    try {
      return await Algorand.getClient(network).pendingTransactionInformation(
        txId
      );
    } catch (err) {
      return await Algorand.checkTxStatus(network, txId);
    }
  }
};

export default Algorand;
