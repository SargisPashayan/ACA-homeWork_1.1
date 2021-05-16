function fromPairs(multyDimArr) {
  let obj = {};

  for (let i = 0; i < multyDimArr.length; i++) {
    obj[multyDimArr[i][0]] = multyDimArr[i][1];
  }

  return obj;
}

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);

//ES8 i kayfer
const arr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const obj = Object.fromEntries(arr);
console.log(obj);
