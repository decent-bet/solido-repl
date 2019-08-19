import { Framework } from '@vechain/connex-framework';
import { Driver, SimpleNet, SimpleWallet } from '@vechain/connex.driver-nodejs';
import { SolidoModule } from '@decent-bet/solido';

export const setupSolido = async ({ URL, PRIVATE_KEY, ACCOUNT }: any, contractMappings: any[]) => {
    // Create Solido Module
    const module = new SolidoModule(contractMappings);

    const wallet = new SimpleWallet();
    wallet.import(PRIVATE_KEY);

    const driver = await Driver.connect(new SimpleNet(URL), wallet);
    const connex = new Framework(driver)

    await connex.thor.block(0).get();
    const { id } = connex.thor.genesis;
    const chainTag = `0x${id.substring(id.length - 2, id.length)}`;

    return module.bindContracts({
        'connex': {
            provider: connex,
            options: {
                defaultAccount: ACCOUNT,
                from: ACCOUNT,
                chainTag,
            }
        }
    }).connect();
};
