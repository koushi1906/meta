function mergeSortedArray(arr1, arr2, m, n) {
  let p = (m = 1),
    q = n - 1,
    k = m + n - 1;

  while (q >= 0) {
    if (nums1[p] >= nums2[q] && p >= 0) {
      nums1[k] = nums1[p];
      p--;
    } else {
      nums1[k] = nums2[q];
      q--;
    }

    k--;
  }
}
