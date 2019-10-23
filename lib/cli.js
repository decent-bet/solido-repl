"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const repl = require('local-repl');
require('dotenv').config();
// const highlight = require('cli-highlight').highlight
const chromafi = require('chromafi');
const solido_provider_thorify_1 = require("@decent-bet/solido-provider-thorify");
const contracts = __importStar(require("@decent-bet/contract-playdbet"));
exports.contractMappings = [
    {
        name: 'DBETNode',
        import: contracts.DBETNode,
        provider: solido_provider_thorify_1.ThorifyPlugin,
        enableDynamicStubs: true,
    },
    {
        name: 'DBETVETToken',
        import: contracts.DBETVETTokenContract,
        provider: solido_provider_thorify_1.ThorifyPlugin,
        enableDynamicStubs: true,
    },
    {
        name: 'Quest',
        import: contracts.QuestContract,
        provider: solido_provider_thorify_1.ThorifyPlugin,
        enableDynamicStubs: true,
    },
    {
        name: 'Tournament',
        import: contracts.TournamentContract,
        provider: solido_provider_thorify_1.ThorifyPlugin,
        enableDynamicStubs: true,
    },
    {
        name: 'Admin',
        import: contracts.AdminContract,
        provider: solido_provider_thorify_1.ThorifyPlugin,
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