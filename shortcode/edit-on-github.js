function editOnGitHub(page) {
  const githubRepo = 'https://github.com/alimd/blog';
  const githubEditBranch = 'main';
  const inputPath = page.inputPath.replace(/^\.\//, '');

  const url = `${githubRepo}/edit/${githubEditBranch}/${inputPath}`;
  return url;
}

module.exports = {editOnGitHub};
