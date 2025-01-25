function lowestAncestor(root, p, q) {
  if (root === p || root === q || !root) return root;

  let left = lowestAncestor(root.left, p, q);
  let right = lowestAncestor(root.right, p, q);

  if (left && right) return root;
  return left ? left : right;
}
