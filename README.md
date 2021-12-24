# Merkle Tree Generator for Zilliqa

A Simple Javascript library to generate Merkle Tree and get its root and proof for any type of Merkle Tree Distribution

## Installation

The recommend way to use MetaMask React with a React app is to install it as a dependency:

```shell
# If you use npm:
npm i merkle-tree-zilliqa-js

# Or if you use Yarn:
yarn add merkle-tree-zilliqa-js
```

## Example

1. The first step is to import the function generateTree from the package.

```javascript
import { generateTree } from 'merkle-tree-zilliqa-js';
```

2. The next step is to send a array of data to the generate tree function. Make sure that the data has the following format:

[
{
wallet:"zil..............",
amount:"10000000000",
}
]
Note: Make sure that the wallet passed is in the base32 format i.e zil.............

3. And boom, you are done! It returns you with the merkle root and proof for all the passed wallets, which can be passed on Smart Contracts for claiming the rewards.

This is just the initial version of the package, feel free to contribute more to it.
