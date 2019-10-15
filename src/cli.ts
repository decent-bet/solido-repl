const repl = require('local-repl');
require('dotenv').config();
// const highlight = require('cli-highlight').highlight
const chromafi = require('chromafi')

import { ThorifyPlugin } from '@decent-bet/solido-provider-thorify';
import { DBETVETTokenContract, QuestContract, AdminContract, TournamentContract } from '@decent-bet/contract-playdbet';

export const contractMappings = [
  {
    name: 'DBETVETToken',
    import: DBETVETTokenContract,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'Quest',
    import: QuestContract,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'Tournament',
    import: TournamentContract,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'Admin',
    import: AdminContract,
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