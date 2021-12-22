require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember artwork gloom nature swift trade'; 
let testAccounts = [
"0x6ab614eb3faf4e4a20782db1caf26c80bcdb08a271961517ad43ebe8c7f9d001",
"0x54d62fec1229a3493053378da9a9181776094cfe99da31e22c8f8d6dd2f0a65b",
"0xef0fcfa28b3cb8a30b07e5e1a29d1368cd32d9513af93868d95561c78ab0cd78",
"0x9000775ec6e0bb74d8b9e9293257580b349497c9a47b5e5a1a567f4cdd1649a9",
"0x60120b890e0e03cfbb87b4c1645ee6eb587e3ffbf7971014a8c5e75912e8d0ad",
"0x4bc549147d9bc74b4d7fe737210e5ac9d46c1c5c088e9c9aee79cb99603837ea",
"0x7cdb3dafe2d835ac7c69f91502210b2fa9f26daf4a4b0ef4f26f5436c35cf00c",
"0x945b4ee9b01b9aaea29be82b4bbe4f8ca5e16dbb7704025f7e25636b0b170985",
"0xa0b5d3a03d52613dd5ccb9b8eccd47d316667fed9654fa21f482dfcb42ab886d",
"0x3bb40fe7c6720e2d9fae61e0973686009c9be6e3918609d7fd024e2e448383e0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


