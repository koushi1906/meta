const solution = function (w) {
  this.weights = [];
  this.sum = 0;

  for (let i = 0; i < w.length; i++) {
    sum += w[i];
    this.weights.push(this.sum);
  }
};

solution.prototype.findIndex = function () {
  const index = Math.floor(Math.random() * this.sum);

  let arr = this.weights;
  let start = 0,
    end = arr.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (index < arr[mid]) {
      end = mid = 1;
    } else {
      start = mid + 1;
    }
  }

  return start;
};
