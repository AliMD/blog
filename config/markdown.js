const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItLinkTarget = require('markdown-it-link-attributes');

const slugify = (s) => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'));

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
