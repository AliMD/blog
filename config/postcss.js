const postcss = require("postcss");
const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");
const tailwindcss = require("tailwindcss");
const postcssNesting = require('tailwindcss/nesting/index.js');

function postcssProcess(code) {
  return postcss([postcssImport, postcssNesting, tailwindcss, postcssPresetEnv, cssnano]).process(code);
}

module.exports = { postcssProcess };
