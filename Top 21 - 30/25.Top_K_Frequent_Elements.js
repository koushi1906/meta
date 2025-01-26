function topKElements(nums, k) {
  let map = new Map();
  let min_heap = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (let [key, value] of map) {
    min_heap.enqueue(key, value);
  }

  while (min_heap.size() > k) min_heap.dequeue();

  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(min_heap.dequeue().element);
  }

  return result;
}
