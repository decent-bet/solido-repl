const repl = require('local-repl');
require('dotenv').config();
// const highlight = require('cli-highlight').highlight
const chromafi = require('chromafi')




repl.start({
  banner: "Solido REPL by @decent-bet",
  prompt: `$ `,
  enableAwait: true,
  writer: (output: string) => {
    try {
      return chromafi(output);
    } catch (e) {
      return output;
    }
  }
});