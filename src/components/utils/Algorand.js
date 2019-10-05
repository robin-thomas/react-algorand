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

  getClientForTx: ctx => {
    let token = {
      "X-API-Key": config.algorand.api[ctx.network].key,
      "Content-Type": "application/x-binary"
    };

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
  },

  createTransaction: async (ctx, { to, amount, memo }) => {
    let tx = await Algorand.getClient(ctx).getTransactionParams();
    tx.to = to;
    tx.amount = Number(amount) * Math.pow(10, 6); // convert to micro-algos.
    tx.genesisHash = tx.genesishashb64;

    const now = new Date().getTime();
    let lastRound = tx.lastRound;

    if (ctx.txScheduleDate.getTime() > now) {
      // 1 block per 4.5s.
      const seconds = (ctx.txScheduleDate.getTime() - now) / 1000;
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

  sendTransaction: async (ctx, tx) => {
    try {
      let txParams = await Algorand.getClient(ctx).getTransactionParams();
      let lastRound = txParams.lastRound;

      if (tx.firstRound <= lastRound && lastRound <= tx.lastRound) {
        const signedTx = algosdk.signTransaction(tx, ctx.wallet.sk);
        const txResponse = await Algorand.getClientForTx(
          ctx
        ).sendRawTransaction(signedTx.blob);

        console.log(`Sent the transaction: ${txResponse.txId}`);

        await Algorand.checkTxStatus(ctx, txResponse.txId);

        return txResponse.txId;
      }

      // wait for atleast 4.5 seconds and try again.
      await Algorand.sleep(4500);
      console.log(
        `Waited for block: #${lastRound}; ${tx.firstRound -
          lastRound} blocks remaining`
      );
      return await Algorand.sendTransaction(ctx, tx);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to make an algorand transaction!");
    }
  },

  sleep: ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  checkTxStatus: async (ctx, txId) => {
    try {
      const response = await Algorand.getClient(
        ctx
      ).pendingTransactionInformation(txId);
      return response;
    } catch (err) {
      return await Algorand.checkTxStatus(ctx, txId);
    }
  }
};

export default Algorand;
