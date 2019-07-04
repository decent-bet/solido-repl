"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        name: 'Admin',
        import: contract_playdbet_1.AdminContract,
        provider: solido_provider_connex_1.ConnexPlugin,
        enableDynamicStubs: true,
    },
];
//# sourceMappingURL=cli.js.map