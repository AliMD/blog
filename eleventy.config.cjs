const {minifyHtml} = require('./config/minify-html');
const {postcssProcess} = require('./config/postcss.js');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const {esbuildTransform, esbuildBuild} = require('./config/esbuild.js');
const {date} = require('./config/date.js');
const {imageShortcode} = require('./shortcode/image.js');
const {editOnGitHub} = require('./shortcode/edit-on-github.js');
const directoryOutputPlugin = require('@11ty/eleventy-plugin-directory-output');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const timeToRead = require('eleventy-plugin-time-to-read');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

/**
 * 11ty configuration.
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'assets': '/',
    'assets/img/meta/favicon.ico': '/favicon.ico',
  });

  eleventyConfig.setQuietMode(true);

  eleventyConfig.addWatchTarget('site');

  eleventyConfig.on("eleventy.before", esbuildBuild);

  eleventyConfig.addShortcode('image', imageShortcode);
  eleventyConfig.addShortcode('editOnGitHub', editOnGitHub);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(timeToRead);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(directoryOutputPlugin, {
    columns: {
      filesize: true,
      benchmark: true,
    },
    warningFileSize: 400 * 1000,
  });

  eleventyConfig.addFilter('getHostname', getHostname);
  eleventyConfig.addFilter('humanReadableDate', date);
  eleventyConfig.addAsyncFilter('postcss', postcssProcess);
  eleventyConfig.addAsyncFilter('esbuild', esbuildTransform);

  eleventyConfig.addTransform('minifyHtml', minifyHtml);
  eleventyConfig.addTransform('trimer', (content) => content.trim());

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['njk', '11ty.js'],
    dir: {
      input: 'site',
      output: 'dist',
      includes: '_includes',
      data: '_data',
      layouts: '_layouts',
    },
  };
};
