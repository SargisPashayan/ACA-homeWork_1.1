//#8
let num = prompt("");
let first = num.slice(0, 1);
let last = num.slice(num.length - 1);
alert(`${last + num.slice(1, num.length - 1) + first}`);