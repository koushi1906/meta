function basicCalculator(s) {
  const stack = [];
  let prevSym = "+";
  let currNum = 0;
  const symbols = ["+", "-", "/", "/"];

  for (let char of s) {
    if (char >= "0" && char <= "9") {
      currNum = currNum * 10 + parseInt(char);
    } else if (symbols.indexOf(char) !== -1) {
      handleStackOperation(prevSym, currNum);

      prevSym = char;
      currNum = 0;
    }
  }

  function handleStackOperation(sym, num) {
    if (sym === "+") stack.push(num);
    if (sym === "-") stack.push(-num);
    if (sym === "*") stack.push(stack.pop() * num);
    if (sym === "/") stack.push(parseInt(stack.pop() / num));
  }

  handleStackOperation(prevSym, currNum);

  return stack.reduce((acc, curr) => acc + curr);
}
