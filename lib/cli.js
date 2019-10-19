"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solido_provider_ethers_1 = require("solido-provider-ethers");
const cDAI_1 = require("./compound/abis/rinkeby/cDAI");
const repl = require('local-repl');
require('dotenv').config();
// const highlight = require('cli-highlight').highlight
const chromafi = require('chromafi');
exports.contractMappings = [
    {
        name: 'cDai',
        import: cDAI_1.cDaiImport,
        provider: solido_provider_ethers_1.EthersPlugin,
        enableDynamicStubs: true,
    },
];
repl.start({
    banner: "Solido REPL by @decent-bet",
    prompt: `$ `,
    enableAwait: true,
    writer: (output) => {
        try {
            return chromafi(output);
        }
        catch (e) {
            return output;
        }
    }
});
//# sourceMappingURL=cli.js.map