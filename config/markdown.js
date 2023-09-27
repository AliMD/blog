const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItLinkTarget = require('markdown-it-link-attributes');
const string = require('string');

const slugify = (s) => string(s).slugify().toString();

const markdown = markdownIt({
  html: true,
});

markdown.use(markdownItAnchor, {slugify});
markdown.use(markdownItLinkTarget, {
  attrs: {
    target: '_blank',
    rel: 'noopener',
  },
});

module.exports = {markdown};
