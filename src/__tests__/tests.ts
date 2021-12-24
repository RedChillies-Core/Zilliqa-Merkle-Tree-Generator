import { generateTree } from '../index';
const data = [
  {
    wallet: 'zil1m6n92lvaymnsdksy53gawffhqd9fuj5p27cj9p',
    amount: '199170000000000000000',
  },
  {
    wallet: 'zil1hnx8cdc87n5vvu0lxq9z9x822ec02r97duglcd',
    amount: '199170000000000000000',
  },
  {
    wallet: 'zil1mdtcs5ryzqytzfz23j9y2plgu9twc7gp4ffrls',
    amount: '3387290000000000000000',
  },
  {
    wallet: 'zil1cm5gdpjmxpklsk4xl5vdd5dl4qxk54zdw42wr5',
    amount: '2055080000000000000000',
  },
];

const result = {
  data: [
    {
      amount: '199170000000000000000',
      proof: [
        '0x0930cc1c35bd425c438e47f974e853c6682d7067dd917c5582a6cc7129b867f9',
        '0xdd6b9a5f0846d50278cff64bde1292c39eb7d217c01afeff8055f78a13c21e15',
      ],
      wallet: '0xDEa6557d9D26E706dA04a451D72537034A9E4A81',
    },
    {
      amount: '199170000000000000000',
      proof: [
        '0xd6cd85604de0c761d32760b3450d6e56a262c6e608d82e70b70e0951a64cf559',
        '0x4dfdb08794036c3926a23b15b59fa5a778520560252f0b83b12f9a874a967070',
      ],
      wallet: '0xbCcc7C3707f4E8c671fF300A2298Ea5670F50CBE',
    },
    {
      amount: '3387290000000000000000',
      proof: [
        '0x3147fc7569f811ec9b83e181b5a373f5d35694708865a5e282c51974f0ff6368',
        '0xdd6b9a5f0846d50278cff64bde1292c39eb7d217c01afeff8055f78a13c21e15',
      ],
      wallet: '0xDb578850641008B1244a8c8A4507E8e156ec7901',
    },
    {
      amount: '2055080000000000000000',
      proof: [
        '0x7ab75f81f2a4ecf9c2ebce80672ef9ffa5809e4cb86a62c2cf0a20e8682bb281',
        '0x4dfdb08794036c3926a23b15b59fa5a778520560252f0b83b12f9a874a967070',
      ],
      wallet: '0xC6E886865b306df85aA6fd18d6d1bFa80D6A544d',
    },
  ],
  root: '0x22385d58a88abea6d001cf0976c3e85393f5f5c8c9928284245b35f519915cd9',
};

test('Merkle Tree Generator', () => {
  expect(generateTree(data)).toStrictEqual(result);
});
