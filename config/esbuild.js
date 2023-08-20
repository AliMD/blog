const { transform } = require("esbuild");
const { env } = require("process");

const debugMode = env.NODE_ENV !== "production";
async function esbuildTransform(content) {
  return (await transform(content, {
    logLevel: "info",
    platform: "browser",
    target: "es2018",
    format: "esm",
    minify: true,
    // treeShaking: true,
    sourcemap: true,
    sourcesContent: debugMode,
    // bundle: true,
    // splitting: true,
    charset: "utf8",
    legalComments: "none",
  })).code;
}

module.exports = { esbuildTransform };
