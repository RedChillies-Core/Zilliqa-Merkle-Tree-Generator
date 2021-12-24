# Merkle Tree Generator for Zilliqa

A Simple Javascript library to generate Merkle Tree and get its root and proof for any type of Merkle Tree Distribution

## Installation

The recommend way to use Merkle Tree Generator is to install it as a dependency:

```shell
# If you use npm:
npm i merkle-tree-zilliqa-js

# Or if you use Yarn:
yarn add merkle-tree-zilliqa-js
```

## Example

1. The first step is to import the function generateTreeforBech32,generateTreeforBase16 from the package.

```javascript
import { generateTreeforBech32, generateTreeforBase16 } from 'merkle-tree-zilliqa-js';
```

2. The next step is to send a array of data to the generate tree function. The format of data should be:

   ```
      [
      {
      wallet:"",
      address:""
      },
      {
      wallet:"",
      address:""
      },
      .....
      ]
   ```

   [ Note: The address should be in base16 for generateTreeforBase16 and bech32 for generateTreeforBase16.]

3. And boom, you are done! It returns you with the merkle root and proof for all the passed wallets, which can be passed on Smart Contracts for claiming the rewards.

This is just the initial version of the package, feel free to contribute more to it.
