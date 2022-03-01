require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name rate stereo home gesture bread slot genuine'; 
let testAccounts = [
"0x12936c843d6f0990e932040d8c86803e5de9e0801722e2272ac21061313a92b6",
"0x80a4e77ddbcf902b98a35c54b9673709a9641c8f4039c07fa92d72b9da1cc5cb",
"0x253465e6e4c6a86c30823b78800b3a94288d3eee5af264df40153de0a07a1d5d",
"0xdf5642229693fc47b237fa480d727355683491b0a8d36c5b8b20e12d8985d182",
"0xdfc2325821375e06c79e215439981a82c6f1085c6783c86211d680a4d8b4bfb2",
"0xc89c41d60f7a5d1c9364b03b1f1e20c57e90ecc6826818e805ca50583c88c008",
"0x185b97eb632b243b3455adc99c204d1389d8837bce592fa544016ff67ba11534",
"0xc0d426ffd34ded0ae18dec62bbb15e0430fa7f87753d598f8f8406d617bd77dc",
"0x005bd4a68173af868e4d7e0cd93ab32fd0150ddde9b46723b383ea1035d43ed0",
"0xb11093e8fb777519c12135c377d6734dddad6ffdfab8f6ecc68cd6bcbe3e5f99"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

