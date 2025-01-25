const validPalindrome = function (s) {
  function isPalindrome(s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) return false;

      left++;
      right--;
    }

    return true;
  }

  let start = 0,
    end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end])
      return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);

    start++;
    end--;
  }

  return true;
};
