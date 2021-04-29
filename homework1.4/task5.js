
//#5
let num1 = +prompt("");
let num2 = +prompt("");
let num3 = +prompt("");

let max = Math.max(num1, Math.max(num2, num3));
let min = -Math.max(-num1, Math.max(-num2, -num3));
let mid = (num1 + num2 + num3) - (max + min);
alert(`${min}, ${mid}, ${max}`);
