function minRemoval(s) {
  let stack = [];
  let a = s.split("");

  for (let i = 0; i < a.length; i++) {
    if (a[i] === "(") {
      stack.push(i);
    } else if (a[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        a[i] = "";
      }
    }
  }

  while (stack.length > 0) a[stack.pop()] = "";
  return a.join("");
}
