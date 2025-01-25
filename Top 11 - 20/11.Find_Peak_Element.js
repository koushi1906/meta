function peakElement(nums) {
  let start = 0,
    end = nums.length - 1;
  if (nums[end] > nums[end - 1]) return end;
  if (nums[start] > nums[start + 1] || end === 0) return 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
    else if (nums[mid] > nums[mid - 1]) start = mid + 1;
    else end = mid - 1;
  }

  return start;
}
