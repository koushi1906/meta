function subArraySum(nums, k) {
  let count = 0;
  let prefixSum = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    let diff = prefixSum - k;

    if (map.has(diff)) count += map.get(diff);

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count;
}
