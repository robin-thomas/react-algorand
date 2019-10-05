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
  const [tx, setTx] = useState(null);
  const [txScheduleDate, setTxScheduleDate] = useState(new Date());
  const [memo, setMemo] = useState(null);
  const [txns, setTxns] = useState({});

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
        tx,
        setTx,
        txScheduleDate,
        setTxScheduleDate,
        memo,
        setMemo,
        txns,
        setTxns
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
