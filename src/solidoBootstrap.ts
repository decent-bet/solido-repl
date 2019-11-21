import { ConnexGraphqlClient } from '@decent-bet/connexql';
import { Framework } from '@vechain/connex-framework';
import { Driver, SimpleNet, SimpleWallet } from '@vechain/connex.driver-nodejs';
import { SolidoModule } from '@decent-bet/solido';
import Web3 from 'web3';
const { thorify } = require('thorify');

export const setupSolido = async ({ URL, PRIVATE_KEY, ACCOUNT }: any, contractMappings: any[]) => {
    // Create Solido Module
    const module = new SolidoModule(contractMappings);

    const wallet = new SimpleWallet();
    wallet.import(PRIVATE_KEY);

    const driver = await Driver.connect(new SimpleNet(URL), wallet);
    const connex = new Framework(driver);
    const thor = thorify(new Web3(), URL);

    await connex.thor.block(0).get();
    const { id } = connex.thor.genesis;
    const chainTag = `0x${id.substring(id.length - 2, id.length)}`;


    return module.bindContracts({
        'thorify': {
            provider: thor,
            options: {
                privateKey: PRIVATE_KEY,
                defaultAccount: ACCOUNT,
                thor,
                chainTag,
            }
        }
    }).connect();
};

export const getConnexql = async ({ URL, PRIVATE_KEY, ACCOUNT }: any) => {

    const wallet = new SimpleWallet();
    wallet.import(PRIVATE_KEY);

    const driver = await Driver.connect(new SimpleNet(URL), wallet);
    const connex = new Framework(driver);

    return new ConnexGraphqlClient(connex);
};
