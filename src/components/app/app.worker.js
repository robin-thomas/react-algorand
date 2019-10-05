/*global self*/
/*eslint no-restricted-globals: ["off", "self"]*/

import Algorand from "../utils/Algorand";

const process = async ({ network, txParams, secretKey }) => {
  // Create the transaction object.
  const tx = await Algorand.createTransaction(network, txParams);
  const dummyId = `pndg-${Math.random()
    .toString(36)
    .substring(7)}`;
  self.postMessage({
    txId: dummyId,
    dummyId: dummyId,
    status: Algorand.status.PENDING,
    ...txParams
  });

  // Wait till the time is ready to submit it.
  // Then sign it and send the transaction.
  const txId = await Algorand.sendTransaction(network, tx, secretKey);
  self.postMessage({
    txId: txId,
    dummyId: dummyId,
    status: Algorand.status.PENDING,
    ...txParams
  });

  // Wait till the transaction is processed by the blockchain.
  await Algorand.checkTxStatus(network, txId);

  // Update the transaction status & return.
  self.postMessage({
    txId: txId,
    status: Algorand.status.SUCCESS, // verify txn status is SUCCESS or FAILURE.
    ...txParams
  });
};

// Wait for a transaction to be processed.
addEventListener("message", event => {
  process(event.data);
});
