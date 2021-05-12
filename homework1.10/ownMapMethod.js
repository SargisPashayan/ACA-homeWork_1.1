const langs = ["JavaScript", "Python", "PHP", "Java", "C"];

Array.prototype.myMap = function (callback) {
  const modArr = [];
  for (let i in this) {
    modArr[i] = callback(this[i]);
  }
  return modArr;
}

const lengths = langs.myMap(function (item) {
  return item.length;
});

console.log(lengths);
