import { BigNumber } from 'bignumber.js';
import { setupSolido, getConnexql, getMpp } from './lib/solidoBootstrap';
import contractMappings from './lib/mapping.config';

module.exports = {
    context: {
        BigNumber,
        contracts: setupSolido(process.env, contractMappings),
        connexql: getConnexql(process.env),
        getMpp: getMpp(process.env),
      },
}