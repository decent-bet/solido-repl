
import { EthersPlugin } from 'solido-provider-ethers';
import { cDaiImport } from './compound/abis/rinkeby/cDAI';

const mapper = [
    {
      name: 'cDai',
      import: cDaiImport,
      provider: EthersPlugin,
      enableDynamicStubs: true,
    },
  ];

export default mapper;