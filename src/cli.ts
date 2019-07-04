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
