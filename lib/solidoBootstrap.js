"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connexql_1 = require("@decent-bet/connexql");
const connex_framework_1 = require("@vechain/connex-framework");
const connex_driver_nodejs_1 = require("@vechain/connex.driver-nodejs");
const solido_1 = require("@decent-bet/solido");
const web3_1 = __importDefault(require("web3"));
const node_mpp_1 = require("@decent-bet/node-mpp");
const { thorify } = require('thorify');
exports.getMpp = ({ URL, PRIVATE_KEY, ACCOUNT }) => {
    return (name, address) => {
        const obj = {
            [name]: address,
        };
        const res = new node_mpp_1.MPP(obj, PRIVATE_KEY, URL);
        return res[name];
    };
};
exports.setupSolido = async ({ URL, PRIVATE_KEY, ACCOUNT }, contractMappings, network = 'testnet') => {
    // Create Solido Module
    const module = new solido_1.SolidoModule(contractMappings);
    const wallet = new connex_driver_nodejs_1.SimpleWallet();
    wallet.import(PRIVATE_KEY);
    let host = 'https://thor-staging.decent.bet';
    if (network === 'mainnet') {
        host = 'https://thor.decent.bet';
    }
    const driver = await connex_driver_nodejs_1.Driver.connect(new connex_driver_nodejs_1.SimpleNet(host), wallet);
    const connex = new connex_framework_1.Framework(driver);
    const thor = thorify(new web3_1.default(), host);
    await connex.thor.block(0).get();
    const { id } = connex.thor.genesis;
    const chainTag = `0x${id.substring(id.length - 2, id.length)}`;
    return module.bindContracts({
        'thorify': {
            provider: thor,
            options: {
                privateKey: PRIVATE_KEY,
                defaultAccount: ACCOUNT,
                thor,
                chainTag,
            }
        }
    }).connect();
};
exports.getConnexql = async ({ URL, PRIVATE_KEY, ACCOUNT }) => {
    const wallet = new connex_driver_nodejs_1.SimpleWallet();
    wallet.import(PRIVATE_KEY);
    const driver = await connex_driver_nodejs_1.Driver.connect(new connex_driver_nodejs_1.SimpleNet(URL), wallet);
    const connex = new connex_framework_1.Framework(driver);
    return new connexql_1.ConnexGraphqlClient(connex);
};
//# sourceMappingURL=solidoBootstrap.js.map