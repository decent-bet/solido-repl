const repl = require('local-repl');
require('dotenv').config();
const chromafi = require('chromafi')

import { BigNumber } from 'bignumber.js';
import { setupSolido } from './solidoBootstrap';
import contractMappings from './mapping.config';

const env: any = process.env
let lastNetwork = '';
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
  },
  context: {
    BigNumber,
    contracts: setupSolido(env, contractMappings),
  },
}).then(async instance => {
  instance.context.contracts = await setupSolido(env, contractMappings);
  instance.context.BigNumber = BigNumber;


  instance.defineCommand('change-network', {
    help: 'Change network',
    action: async (network) => {
      instance.clearBufferedCommand();
      console.log(`Changing network to ${network}`);
      // reset with new network
      instance.context.contracts = await setupSolido(env, contractMappings, network);
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
      instance.context.contracts = await setupSolido(env, contractMappingConfig.default, lastNetwork);
      instance.displayPrompt();
    }
  });
});
