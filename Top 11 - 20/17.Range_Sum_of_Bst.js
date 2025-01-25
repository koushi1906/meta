function rangeSum(root, low, high) {
  function dfs(node) {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    if (node.val >= low && node.val <= high) {
      return node.val + left + right;
    } else {
      return left + right;
    }
  }

  return dfs(root);
}
