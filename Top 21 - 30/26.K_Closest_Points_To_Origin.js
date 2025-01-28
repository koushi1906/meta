function k_closest_points(points, k) {
  let heap = new MinPriorityQueue();

  for (let i = 0; i < points.length; i++) {
    let xDistance = points[i][0] * points[i][0];
    let yDistance = points[i][1] * points[i][1];

    let totalDistance = xDistance + yDistance;

    heap.enqueue(i, totalDistance);
  }

  let result = [];
  for (let i = 0; i < k; i++) {
    let curr = heap.dequeue();
    result.push(curr.element);
  }

  return result;
}
