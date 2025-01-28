function findBuildings(heights) {
  let stack = [];

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] <= heights[i])
      stack.pop();

    stack.push(i);
  }

  return stack;
}
