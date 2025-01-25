function verticalOrder(root) {
  if (!root) return [];
  const map = new Map();
  let minCol = 0,
    maxCol = 0;

  const queue = [{ node: root, level: 0 }];

  while (queue.length) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const { node, level } = queue.shift();

      if (!map.has(level)) map.set(level, [node.val]);
      else map.get(level).push(node.val);

      if (node.left) queue.push({ node: node.left, level: level - 1 });
      if (node.right) queue.push({ node: node.right, level: level + 1 });
    }
  }

  const result = [];
  for (let i = minCol; i <= maxCol; i++) {
    result.push(map.get(i) || []);
  }

  return result;
}
