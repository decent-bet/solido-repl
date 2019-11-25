"use strict";
exports.__esModule = true;
var bignumber_js_1 = require("bignumber.js");
var solidoBootstrap_1 = require("./lib/solidoBootstrap");
var mapping_config_1 = require("./lib/mapping.config");
module.exports = {
    context: {
        BigNumber: bignumber_js_1.BigNumber,
        contracts: solidoBootstrap_1.setupSolido(process.env, mapping_config_1["default"]),
        connexql: solidoBootstrap_1.getConnexql(process.env)
    }
};
