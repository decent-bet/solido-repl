"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solido_provider_ethers_1 = require("solido-provider-ethers");
const cDAI_1 = require("./compound/abis/rinkeby/cDAI");
const mapper = [
    {
        name: 'cDai',
        import: cDAI_1.cDaiImport,
        provider: solido_provider_ethers_1.EthersPlugin,
        enableDynamicStubs: true,
    },
];
exports.default = mapper;
//# sourceMappingURL=mapping.config.js.map