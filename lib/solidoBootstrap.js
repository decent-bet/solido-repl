"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solido_1 = require("@decent-bet/solido");
const ethers_1 = require("ethers");
exports.setupSolido = async ({ URL, PRIVATE_KEY, ACCOUNT }, contractMappings, network = 'rinkeby') => {
    // Create Solido Module
    const module = new solido_1.SolidoModule(contractMappings);
    const provider = ethers_1.ethers.getDefaultProvider(network); // new ethers.providers.JsonRpcProvider(URL, network)
    return module.bindContracts({
        'ethers': {
            provider,
            options: {
                privateKey: PRIVATE_KEY,
                defaultAccount: ACCOUNT,
                provider,
                network,
            }
        }
    }).connect();
};
//# sourceMappingURL=solidoBootstrap.js.map