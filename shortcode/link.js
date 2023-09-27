function link(content, url, target = '_blank') {
  return `<a href="${url}" target="${target}">${content}</a>`;
}

module.exports = {link};
