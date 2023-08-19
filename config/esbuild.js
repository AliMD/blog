const { build } = require("esbuild");
const { env } = require("process");

const debugMode = env.NODE_ENV !== "production";
async function esbuild() {
  await build({
    entryPoints: [`site/_js/main.ts`],
    outdir: "dist/",
    logLevel: "info",
    platform: "browser",
    target: "es2018",
    format: "esm",
    conditions: debugMode ? ["development"] : undefined,
    minify: true,
    treeShaking: true,
    sourcemap: true,
    sourcesContent: debugMode,
    bundle: true,
    splitting: true,
    charset: "utf8",
    legalComments: "none",
    metafile: true,
  });
}

module.exports = { esbuild };
