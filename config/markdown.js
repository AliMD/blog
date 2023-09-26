const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItLinkTarget = require('markdown-it-link-attributes');

const markdown = markdownIt();

markdown.use(markdownItAnchor);
markdown.use(markdownItLinkTarget, {
  attrs: {
    target: '_blank',
    rel: 'noopener',
  },
});

module.exports = {markdown};
