"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const solido_provider_thorify_1 = require("@decent-bet/solido-provider-thorify");
const contracts = __importStar(require("@decent-bet/contract-playdbet"));
const mapper = [
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
exports.default = mapper;
//# sourceMappingURL=mapping.config.js.map