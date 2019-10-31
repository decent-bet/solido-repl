import { BigNumber } from 'bignumber.js';
import { setupSolido } from './lib/solidoBootstrap';
import contractMappings from './lib/mapping.config';

module.exports = {
    context: {
        BigNumber,
        contracts: setupSolido(process.env, contractMappings),
      },
}