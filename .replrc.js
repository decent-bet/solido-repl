"use strict";
exports.__esModule = true;
require('dotenv').config();
var bignumber_js_1 = require("bignumber.js");
var solidoBootstrap_1 = require("./lib/solidoBootstrap");
var cli_1 = require("./lib/cli");
module.exports = {
    banner: "Solido REPL by @decent-bet",
    prompt: "$ ",
    enableAwait: true,
    context: {
        BigNumber: bignumber_js_1.BigNumber,
        contracts: solidoBootstrap_1.setupSolido(process.env, cli_1.contractMappings)
    }
};
