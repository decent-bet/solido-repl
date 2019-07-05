import { BigNumber } from 'bignumber.js';
import { setupSolido } from './lib/solidoBootstrap';
import { contractMappings } from './lib/cli';

module.exports = {
    context: {
        BigNumber,
        contracts: setupSolido(process.env, contractMappings),
      },
}