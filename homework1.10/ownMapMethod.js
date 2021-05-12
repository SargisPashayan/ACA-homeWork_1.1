const langs = ["JavaScript", "Python", "PHP", "Java", "C"];

function myMap(arr, callback) {
  const modArr = [];
  for (let i in arr) {
    modArr[i] = callback(arr[i]);
  }
  return modArr;
}

const lengths = myMap(langs, function (item) {
  return item.length;
});

console.log(lengths);
