# React-Algorand

[![NPM](https://img.shields.io/npm/v/react-algorand.svg)](https://www.npmjs.com/package/react-algorand)
![](https://img.shields.io/badge/nodejs-12.4-blue.svg)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

# Demo link

https://test.robinthomas2591.now.sh/

# Table of Contents

1. [Install](#install)
2. [Usage](#usage)
3. [Features](#features)

# Install

```sh
$ npm install react-algorand
```

# Usage

```
import React from "react";

import Algorand from "react-algorand";

function App() {
  return (
    <Algorand color="primary" />
  );
}

export default App;
```

**color** can be one among `danger`, `primary`, `dark`, `warning`, `success`, `secondary`, or `info`. If none is provided, it'll be defaulted to `dark`

# Features

- Zero configuration required.
- Login using Algorand wallet (wallet file is simply a text file containing the mnemonic).
- Create a new Algorand account and the wallet file will be downloaded automatically.
- See the account balance & address before making the transaction.
- Add a memo (or note) to your transaction (optional field).
- Send payment transaction to another Algorand account.
- Can schedule your transaction to be processed in the future.
- Can make multiple transactions in one user session.
- See the history of all transactions made in one user session.
- Processed transactions will show the timestamp (when hovered over the spinner) when the transaction was processed.
- Pending transactions will show the remaining time (when hovered over the spinner) for the transaction to be processed.
- If the user closes his/her browser, all pending transactions will be cancelled.
- Support different Algorand networks - `mainnet`, and `testnet`.
- Choose between different themes - `danger`, `primary`, `dark`, `warning`, `success`, `secondary`, `info`.
