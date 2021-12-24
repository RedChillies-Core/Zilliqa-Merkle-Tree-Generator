import { generateTreeforBase16, generateTreeforBech32 } from '../index';
const dataforBase32 = [
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
const dataforBase16 = [
  {
    wallet: '0xdea6557d9d26e706da04a451d72537034a9e4a81',
    amount: '199170000000000000000',
  },
  {
    wallet: '0xbccc7c3707f4e8c671ff300a2298ea5670f50cbe',
    amount: '199170000000000000000',
  },
  {
    wallet: '0xdb578850641008b1244a8c8a4507e8e156ec7901',
    amount: '3387290000000000000000',
  },
  {
    wallet: '0xc6e886865b306df85aa6fd18d6d1bfa80d6a544d',
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
      wallet: '0xdea6557d9d26e706da04a451d72537034a9e4a81',
    },
    {
      amount: '199170000000000000000',
      proof: [
        '0xd6cd85604de0c761d32760b3450d6e56a262c6e608d82e70b70e0951a64cf559',
        '0x4dfdb08794036c3926a23b15b59fa5a778520560252f0b83b12f9a874a967070',
      ],
      wallet: '0xbccc7c3707f4e8c671ff300a2298ea5670f50cbe',
    },
    {
      amount: '3387290000000000000000',
      proof: [
        '0x3147fc7569f811ec9b83e181b5a373f5d35694708865a5e282c51974f0ff6368',
        '0xdd6b9a5f0846d50278cff64bde1292c39eb7d217c01afeff8055f78a13c21e15',
      ],
      wallet: '0xdb578850641008b1244a8c8a4507e8e156ec7901',
    },
    {
      amount: '2055080000000000000000',
      proof: [
        '0x7ab75f81f2a4ecf9c2ebce80672ef9ffa5809e4cb86a62c2cf0a20e8682bb281',
        '0x4dfdb08794036c3926a23b15b59fa5a778520560252f0b83b12f9a874a967070',
      ],
      wallet: '0xc6e886865b306df85aa6fd18d6d1bfa80d6a544d',
    },
  ],
  root: '0x22385d58a88abea6d001cf0976c3e85393f5f5c8c9928284245b35f519915cd9',
};

test('Merkle Tree Generator for Base 32', () => {
  expect(generateTreeforBech32(dataforBase32)).toStrictEqual(result);
});

test('Merkle Tree Generator for Base 16', () => {
  expect(generateTreeforBase16(dataforBase16)).toStrictEqual(result);
});
