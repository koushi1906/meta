function lowestCommonAncestor(p, q) {
  let p_copy = p,
    q_copy = q;

  while (p_copy !== q_copy) {
    p_copy = p_copy !== null ? p_copy.parent : q;
    q_copy = q_copy !== null ? q_copy.parent : p;
  }

  return p_copy;
}
