// const array = [1, 2, , 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

let passed = [12, 5, , 130, 44].mySome(function(element) {
    return (element >= 100);
});
console.log(passed);