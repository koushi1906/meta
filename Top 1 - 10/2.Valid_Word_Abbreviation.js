function validWordAbbreviation(word, abbr) {
  let wp = 0,
    ap = 0;
  let currentNumber = 0;

  while (wp < word.length) {
    if (!isNaN(abbr[ap])) {
      currentNumber = currentNumber * 10 + parseInt(abbr[ap]);
      if (currentNumber === 0) return false;
      ap++;
    } else if (currentNumber > 0) {
      wp += currentNumber;
      currentNumber = 0;
    } else if (abbr[ap] === word[wp]) {
      ap++;
      wp++;
    } else {
      return false;
    }
  }

  return ap === abbr.length && wp + currentNumber === word.length;
}
