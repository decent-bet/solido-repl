import { Framework } from '@vechain/connex-framework';
import { DriverNodeJS } from '@vechain/connex.driver-nodejs';
import { SolidoModule } from '@decent-bet/solido';

export const setupSolido = async ({ URL, PRIVATE_KEY, ACCOUNT }: any, contractMappings: any[]) => {
    // Create Solido Module
    const module = new SolidoModule(contractMappings);


    const driver = await DriverNodeJS.connect(URL)
    const connex = new Framework(driver)
    const wallet = driver.wallet
    wallet.add(PRIVATE_KEY);

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
