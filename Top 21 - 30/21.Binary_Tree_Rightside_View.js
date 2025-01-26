function rightSideView(root) {
  const result = [];
  dfs(root, 0);

  function dfs(node, level) {
    if (!node) return;

    if (!result[level]) result[level] = node.val;

    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  }

  return result;
}
