var depthSum = function (nestedList) {
  let level = 1;
  let queue = [...nestedList];
  let sum = 0;

  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let curr = queue.shift;

      if (Array.isArray(curr)) {
        queue.push(...curr);
      } else {
        sum += curr;
      }
    }

    level += 1;
  }

  return sum;
};

// dfs

var depthSum = function (nestedList) {
  function dfs(nestedList, level) {
    let res = 0;

    for (let i = 0; i < nestedList.length; i++) {
      if (Array.isArray(nestedList[i])) {
        res += dfs(nestedList[i], level + 1);
      } else {
        res += nestedList[i];
      }
    }

    return res;
  }

  return dfs(nestedList, 0);
};
