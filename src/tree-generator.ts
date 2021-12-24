import { sha256 } from 'js-sha256';
import { MerkleTree } from 'merkletreejs';
import { bytes, BN } from '@zilliqa-js/util';
import { fromBech32Address } from '@zilliqa-js/crypto';

interface DataInterface {
  wallet: string;
  amount: string;
}

const getHashData = (el: any) => {
  return sha256([
    ...bytes.hexToByteArray(fromBech32Address(el.wallet).slice(2, el.wallet.length)),
    ...bytes.hexToByteArray(sha256(new BN(el.amount).toArray('be', 16))),
  ]);
};

export const generateTree = (props: DataInterface[]) => {
  const leavesData: string[] = [];
  const accumulator: any[] = [];
  props.forEach((element) => {
    const hashedData = getHashData(element);
    leavesData.push(hashedData);
    accumulator.push({
      wallet: fromBech32Address(element.wallet),
      hex: hashedData,
      amount: element.amount,
    });
  });
  const tree = new MerkleTree(leavesData, sha256, {
    sortLeaves: true,
  });
  const merkleRoot = tree.getRoot().toString('hex');
  accumulator.forEach((data) => {
    const proof = tree.getHexProof(data.hex);
    data.proof = proof;
    delete data.hex;
  });
  return { root: `0x${merkleRoot}`, data: accumulator };
};
