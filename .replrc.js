"use strict";
exports.__esModule = true;
var bignumber_js_1 = require("bignumber.js");
var solidoBootstrap_1 = require("./lib/solidoBootstrap");
var cli_1 = require("./lib/cli");
module.exports = {
    context: {
        BigNumber: bignumber_js_1.BigNumber,
        contracts: solidoBootstrap_1.setupSolido(process.env, cli_1.contractMappings)
    }
};
