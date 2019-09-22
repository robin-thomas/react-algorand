import React, { useState } from "react";

const DataContext = React.createContext();

const DataProvider = props => {
  const [disabled, setDisabled] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [colorClass, setColorClass] = useState(null);

  return (
    <DataContext.Provider
      value={{
        disabled,
        setDisabled,
        walletConnected,
        setWalletConnected,
        colorClass,
        setColorClass
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
