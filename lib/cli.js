"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repl = require('local-repl');
require('dotenv').config();
// const highlight = require('cli-highlight').highlight
const chromafi = require('chromafi');
const solido_provider_connex_1 = require("@decent-bet/solido-provider-connex");
const contract_playdbet_1 = require("@decent-bet/contract-playdbet");
exports.contractMappings = [
    {
        name: 'DBETVETToken',
        import: contract_playdbet_1.DBETVETTokenContract,
        provider: solido_provider_connex_1.ConnexPlugin,
        enableDynamicStubs: true,
    },
    {
        name: 'Quest',
        import: contract_playdbet_1.QuestContract,
        provider: solido_provider_connex_1.ConnexPlugin,
        enableDynamicStubs: true,
    },
    {
        name: 'Tournament',
        import: contract_playdbet_1.TournamentContract,
        provider: solido_provider_connex_1.ConnexPlugin,
        enableDynamicStubs: true,
    },
    {
        name: 'Admin',
        import: contract_playdbet_1.AdminContract,
        provider: solido_provider_connex_1.ConnexPlugin,
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