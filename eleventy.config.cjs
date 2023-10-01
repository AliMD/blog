const directoryOutputPlugin = require('@11ty/eleventy-plugin-directory-output');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginTOC = require('eleventy-plugin-toc');
const {markdown} = require('./config/markdown.js');
const {esbuildTransform, esbuildBuild} = require('./config/esbuild.js');
const {postcssProcess} = require('./config/postcss.js');
const {date} = require('./config/date.js');
const {loadIcon} = require('./shortcode/alwatr-icon.js');
const {image} = require('./shortcode/image.js');
const {editOnGitHub} = require('./shortcode/edit-on-github.js');
const {minifyHtml} = require('./config/minify-html');

/**
 * 11ty configuration.
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    assets: '/',
    'assets/img/meta/favicon.ico': '/favicon.ico',
  });

  eleventyConfig.setQuietMode(true);
  eleventyConfig.addWatchTarget('./site/');

  eleventyConfig.on('eleventy.before', esbuildBuild);

  eleventyConfig.setLibrary('md', markdown);

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(directoryOutputPlugin, {
    columns: {
      filesize: true,
      benchmark: true,
    },
    warningFileSize: 400 * 1000,
  });
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'],
    wrapper: 'div',
    wrapperClass: 'toc',
  });

  eleventyConfig.addFilter('humanReadableDate', date);
  eleventyConfig.addFilter('trimer', (content) => content.trim());
  eleventyConfig.addAsyncFilter('postcss', postcssProcess);
  eleventyConfig.addAsyncFilter('esbuild', esbuildTransform);

  eleventyConfig.addShortcode('alwatrIcon', loadIcon);
  eleventyConfig.addShortcode('editOnGitHub', editOnGitHub);
  eleventyConfig.addShortcode('image', image);

  eleventyConfig.addTransform('minifyHtml', minifyHtml);
  eleventyConfig.addTransform('trimer', (content) => content.trim());

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['njk', '11ty.js', 'md'],
    dir: {
      input: 'site',
      output: 'dist',
      includes: '_includes',
      data: '_data',
      layouts: '_layouts',
    },
  };
};
