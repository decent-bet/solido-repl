
import { ThorifyPlugin } from '@decent-bet/solido-provider-thorify';
import * as contracts from '@decent-bet/contract-playdbet';

const mapper = [
  {
    name: 'DBETNode',
    import: (contracts as any).DBETNode,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'DBETVETToken',
    import: contracts.DBETVETTokenContract,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'Quest',
    import: contracts.QuestContract,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'Tournament',
    import: contracts.TournamentContract,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
  {
    name: 'Admin',
    import: contracts.AdminContract,
    provider: ThorifyPlugin,
    enableDynamicStubs: true,
  },
];

export default mapper;