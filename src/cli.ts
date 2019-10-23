const repl = require('local-repl');
require('dotenv').config();
// const highlight = require('cli-highlight').highlight
const chromafi = require('chromafi')

import { ThorifyPlugin } from '@decent-bet/solido-provider-thorify';
import * as contracts from '@decent-bet/contract-playdbet';

export const contractMappings = [
  {
    name: 'DBETNode',
    import: (contracts as any).DBETNode,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'DBETVETToken',
    import: contracts.DBETVETTokenContract,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'Quest',
    import: contracts.QuestContract,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'Tournament',
    import: contracts.TournamentContract,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'Admin',
    import: contracts.AdminContract,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
];



repl.start({
  banner: "Solido REPL by @decent-bet",
  prompt: `$ `,
  enableAwait: true,
  writer: (output: string) => {
    try {
      return chromafi(output);
    } catch (e) {
      return output;
    }
  }
});