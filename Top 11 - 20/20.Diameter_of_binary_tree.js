function diameter(root) {
  let maxPath = 0;

  const dfs = function (node) {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    maxPath = Math.max(maxPath, left + right);

    return 1 + Math.max(left, right);
  };

  dfs(root);
  return maxPath;
}
