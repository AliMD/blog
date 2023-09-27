const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');
const postcssNesting = require('tailwindcss/nesting/index.js');

function postcssProcess(code) {
  try {
    return postcss([
      postcssImport({root: 'site/_css'}),
      postcssNesting,
      tailwindcss,
      postcssPresetEnv,
      cssnano({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      }),
    ])
    .process(code)
    .then((result) => {
      return result.css.replaceAll('--tw-', '--alw-');
    });
  } catch (err) {
    console.error('postcssProcess Error: ', err);
    return content;
  }
}

module.exports = {postcssProcess};
