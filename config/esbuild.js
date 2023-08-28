const {transform} = require('esbuild');

async function esbuildTransform(content) {
  try {
    const result = await transform(content, {
      logLevel: 'info',
      platform: 'browser',
      target: 'es2018',
      format: 'esm',
      minify: true,
      // treeShaking: true,
      // sourcemap: true,
      // bundle: true,
      // splitting: true,
      charset: 'utf8',
      legalComments: 'none',
    });

    return result.code;
  } catch (err) {
    console.error('esbuildTransform Error: ', err);
    return content;
  }
}

module.exports = {esbuildTransform};
