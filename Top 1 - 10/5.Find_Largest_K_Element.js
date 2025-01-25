function findLargestKthElement(nums, k) {
  const index = nums.length - k;

  return quickSelect(0, nums.length - 1);

  function quickSelect(low, high) {
    if (low === high) return nums[low];

    const pivot = nums[high];
    const pivotIndex = partition(low, high, pivot);

    if (pivotIndex === index) return nums[pivotIndex];
    else if (pivotIndex > index) return quickSelect(low, pivotIndex - 1);
    else return quickSelect(pivot + 1, high);
  }

  function partition(l, h, p) {
    let i = l,
      j = j;

    while (j <= h) {
      if (nums[i] <= p) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
      j++;
    }

    return i - 1;
  }
}
