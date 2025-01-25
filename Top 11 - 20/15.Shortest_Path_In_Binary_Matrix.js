function shortestPath(matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let queue = [[0, 0]];
  matrix[0][0] = -1;
  let steps = 1;
  let directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, 1],
    [-1, -1],
    [1, -1],
  ];
  if (m === 0 || n === 0 || matrix[0][0] !== 0) return 0;

  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      const [x, y] = queue.shift();

      if (x === m - 1 && y === n - 1) return steps;

      for (let i = 0; i < directions.length; i++) {
        let [nX, nY] = directions[i];

        if (isValidPath(x + nX, y + nY) && grid[x + nX][y + nY] === 0) {
          queue.push([x + nX, y + nY]);
          grid[x + nX][y + nY] = -1;
        }
      }
    }
    steps++;
  }

  function isValidPath(row, col) {
    return row >= 0 && row < m && col >= 0 && col < n;
  }

  return -1;
}
