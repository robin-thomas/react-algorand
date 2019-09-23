import React, { useState } from "react";

const DataContext = React.createContext();

const DataProvider = props => {
  const [disabled, setDisabled] = useState(true);
  const [walletConnected, setWalletConnected] = useState(false);
  const [colorClass, setColorClass] = useState(null);
  const [page, setPage] = useState("home");
  const [api, setApi] = useState(null);

  return (
    <DataContext.Provider
      value={{
        disabled,
        setDisabled,
        walletConnected,
        setWalletConnected,
        colorClass,
        setColorClass,
        page,
        setPage,
        api,
        setApi
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
