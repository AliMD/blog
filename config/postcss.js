const postcss = require("postcss");
const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");

function postcssProcess(code) {
  return postcss([postcssPresetEnv, postcssImport, cssnano]).process(code);
}

module.exports = { postcssProcess };
