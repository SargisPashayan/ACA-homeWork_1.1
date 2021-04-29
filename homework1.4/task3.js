//#3
let integer = prompt("");
if (integer % 10 === 0) {
  alert(integer);
} else {
  let str = integer.toString(10);
  let newInt = str[str.length - 1] + str.slice(0, str.length - 1);
  alert(newInt);
}