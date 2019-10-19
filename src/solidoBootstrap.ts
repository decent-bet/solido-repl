import { SolidoModule } from '@decent-bet/solido';
import { ethers } from 'ethers';

export const setupSolido = async ({ URL, PRIVATE_KEY, ACCOUNT }: any, contractMappings: any[]) => {
    // Create Solido Module
    const module = new SolidoModule(contractMappings);
const provider = ethers.getDefaultProvider('rinkeby')// new ethers.providers.JsonRpcProvider(URL, 'rinkeby')

    return module.bindContracts({
        'ethers': {
            provider,
            options: {
                privateKey: PRIVATE_KEY,
                defaultAccount: ACCOUNT,
                provider,
                network: 'rinkeby',
            }
        }
    }).connect();
};
