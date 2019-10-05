# React-Algorand

![](https://img.shields.io/badge/nodejs-12.4-blue.svg) [![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

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
- Send payment transaction to another Algorand account.
- See the account balance & address before making the transaction.
- Add a memo (or note) to your transaction (optional field).
- Can schedule your transaction to be processed in the future.
- It will wait until the transaction is mined and then link to Algorand explorer.
- Support different Algorand networks - `mainnet`, and `testnet`.
- Choose between different themes - `danger`, `primary`, `dark`, `warning`, `success`, `secondary`, `info`.
