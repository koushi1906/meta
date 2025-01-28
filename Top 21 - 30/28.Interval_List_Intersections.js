function intervalIntersection(firstList, secondList) {
  let aI = 0,
    bI = 0;
  let result = [];

  while (aI < firstList.length && bI < secondList.length) {
    let maxStart = Math.max(firstList[aI][0], secondList[bI][0]);
    let minEnd = Math.min(firstList[aI][1], secondList[bI][1]);

    if (maxStart <= minEnd) result.push([maxStart, minEnd]);

    if (firstList[aI][1] < secondList[bI][1]) aI++;
    else bI++;
  }

  return result;
}
