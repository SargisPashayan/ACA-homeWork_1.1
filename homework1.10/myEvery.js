Array.prototype.myEvery = function (callback) {
  for (let i in this) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

let passed = [12, 5, 0, , 44].myEvery(function (item) {
  return item >= 0;
});
console.log(passed);

 
