require('dotenv').config()
import { BigNumber } from 'bignumber.js';
import { setupSolido } from './lib/solidoBootstrap'
import { contractMappings } from './lib/cli';



module.exports = {
    banner: "Solido REPL by @decent-bet",
    prompt: `$ `,
    enableAwait: true,
    context: {
        BigNumber,
        contracts: setupSolido(process.env as any, contractMappings),
    }
};