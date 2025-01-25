function simplifyPath(path) {
  const components = path.split("/");
  const stack = [];

  for (let component of components) {
    if (component === "." || component === "") continue;

    if (component === "..") {
      if (stack.length) stack.pop();
    } else {
      stack.push(component);
    }
  }

  return "/" + stack.join("/");
}
