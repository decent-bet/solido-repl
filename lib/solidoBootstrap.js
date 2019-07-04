"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connex_framework_1 = require("@vechain/connex-framework");
const connex_driver_nodejs_1 = require("@vechain/connex.driver-nodejs");
const solido_1 = require("@decent-bet/solido");
exports.setupSolido = async ({ URL, PRIVATE_KEY, ACCOUNT }, contractMappings) => {
    // Create Solido Module
    const module = new solido_1.SolidoModule(contractMappings);
    const driver = await connex_driver_nodejs_1.DriverNodeJS.connect(URL);
    const connex = new connex_framework_1.Framework(driver);
    const wallet = driver.wallet;
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
//# sourceMappingURL=solidoBootstrap.js.map