import { EthersPlugin } from 'solido-provider-ethers';
import { cDaiImport } from './compound/abis/rinkeby/cDAI';


const repl = require('local-repl');
require('dotenv').config();
// const highlight = require('cli-highlight').highlight
const chromafi = require('chromafi')


export const contractMappings = [
  {
    name: 'cDai',
    import: cDaiImport,
    provider: EthersPlugin,
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