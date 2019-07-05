const repl = require('local-repl');
require('dotenv').config();
// const highlight = require('cli-highlight').highlight
const chromafi = require('chromafi')

import { ConnexPlugin } from '@decent-bet/solido-provider-connex';
import { DBETVETTokenContract, QuestContract, AdminContract } from '@decent-bet/contract-playdbet';

export const contractMappings = [
  {
    name: 'DBETVETToken',
    import: DBETVETTokenContract,
    provider: ConnexPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'Quest',
    import: QuestContract,
    provider: ConnexPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'Admin',
    import: AdminContract,
    provider: ConnexPlugin,
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