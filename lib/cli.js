"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repl = require('local-repl');
require('dotenv').config();
const chromafi = require('chromafi');
const bignumber_js_1 = require("bignumber.js");
const solidoBootstrap_1 = require("./solidoBootstrap");
const mapping_config_1 = __importDefault(require("./mapping.config"));
const env = process.env;
let lastNetwork = '';
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
    },
    context: {
        BigNumber: bignumber_js_1.BigNumber,
        contracts: solidoBootstrap_1.setupSolido(env, mapping_config_1.default),
    },
}).then(async (instance) => {
    instance.context.contracts = await solidoBootstrap_1.setupSolido(env, mapping_config_1.default);
    instance.context.BigNumber = bignumber_js_1.BigNumber;
    instance.defineCommand('change-network', {
        help: 'Change network',
        action: async (network) => {
            instance.clearBufferedCommand();
            console.log(`Changing network to ${network}`);
            // reset with new network
            instance.context.contracts = await solidoBootstrap_1.setupSolido(env, mapping_config_1.default, network);
            instance.displayPrompt();
            lastNetwork = network;
        }
    });
    instance.defineCommand('load-mappings', {
        help: 'Change contract mappings',
        action: async (mappings) => {
            instance.clearBufferedCommand();
            console.log(`Changing mappings`);
            const contractMappingConfig = require(mappings);
            instance.context.contracts = await solidoBootstrap_1.setupSolido(env, contractMappingConfig.default, lastNetwork);
            instance.displayPrompt();
        }
    });
});
//# sourceMappingURL=cli.js.map