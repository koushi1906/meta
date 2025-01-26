function mergeIntervals(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  let start = 0;

  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[start];
    let curr = intervals[i];
    if (curr[0] <= interval[1]) {
      interval = [interval[0], Math.max(interval[1], curr[1])];
    } else {
      result.push(interval);
      start = i;
    }
  }

  let int1 = intervals[start];
  let int2 = result[result.length - 1];

  if (!int2) result.push(int1);
  else {
    if (int2[1] >= int1[0]) {
      result[result.length - 1] = [int2[0], Math.max(int2[1], int1[1])];
    } else {
      result.push(int1);
    }
  }

  return result;
}

const testcase = mergeIntervals([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
console.log(testcase);
