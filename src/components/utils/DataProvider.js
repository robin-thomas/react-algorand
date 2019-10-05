import React, { useState } from "react";

const DataContext = React.createContext();

const DataProvider = props => {
  const [disabled, setDisabled] = useState(true);
  const [colorClass, setColorClass] = useState(null);
  const [page, setPage] = useState("home");
  const [wallet, setWallet] = useState(null);
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState("testnet");
  const [validation, setValidation] = useState({
    amount: false,
    toAddress: false
  });
  const [txDate, setTxDate] = useState(null);
  const [memo, setMemo] = useState(null);
  const [txs, setTxs] = useState({});
  const [worker, setWorker] = useState(null);

  return (
    <DataContext.Provider
      value={{
        disabled,
        setDisabled,
        colorClass,
        setColorClass,
        page,
        setPage,
        wallet,
        setWallet,
        account,
        setAccount,
        network,
        setNetwork,
        validation,
        setValidation,
        txDate,
        setTxDate,
        memo,
        setMemo,
        txs,
        setTxs,
        worker,
        setWorker
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

const DataConsumer = DataContext.Consumer;

export { DataConsumer };
export { DataContext };
export default DataProvider;
