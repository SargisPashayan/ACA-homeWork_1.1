function peek(stack) {
  return stack[stack.length - 1];
}

function isBalanced(str) {
  let stack = [];
  let countOpen = 0;
  let countClose = 0;

  for (let i = 0; i < str.length; i++) {
    let symb = str[i];
    if (symb === "(") {
      countOpen++;
      stack.push(symb);
    } else if (symb === ")") {
      countClose++;
      if (peek(stack) === "(") {
        stack.pop();
      } else {
        continue;
      }
    }
  }
  return Math.abs(countOpen - countClose);
}

console.log(isBalanced("()))"));
