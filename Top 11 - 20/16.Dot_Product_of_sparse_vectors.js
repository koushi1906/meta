const spaseVector = function (nums) {
  this.nums = nums;
};

spaseVector.prototype.dotProduct = function (vec) {
  let dotProduct = 0;

  for (let i = 0; i < vec.nums.length; i++) {
    if (this.nums[i] === 0 || vec.nums[i] === 0) continue;

    dotProduct += this.nums[i] * vec.nums[i];
  }

  return dotProduct;
};
