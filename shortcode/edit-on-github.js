function editOnGitHub(page) {
  const githubRepo = 'https://github.com/njfamirm/njfamirm.ir';
  const githubEditBranch = 'main';
  const inputPath = page.inputPath.replace(/^\.\//, '');

  const url = `${githubRepo}/edit/${githubEditBranch}/${inputPath}`;
  return url;
}

module.exports = {editOnGitHub};
