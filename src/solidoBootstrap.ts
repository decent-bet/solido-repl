import { SolidoModule } from '@decent-bet/solido';
import { ethers } from 'ethers';

export const setupSolido = async ({ URL, PRIVATE_KEY, ACCOUNT }: any, contractMappings: any[], network: string = 'rinkeby') => {
    // Create Solido Module
    const module = new SolidoModule(contractMappings);
const provider = ethers.getDefaultProvider(network)// new ethers.providers.JsonRpcProvider(URL, network)

    return module.bindContracts({
        'ethers': {
            provider,
            options: {
                privateKey: PRIVATE_KEY,
                defaultAccount: ACCOUNT,
                provider,
                network,
            }
        }
    }).connect();
};
