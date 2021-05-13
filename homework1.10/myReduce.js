Array.prototype.myReduce = function (callback, initialVal) {
  let accumulator = initialVal === undefined ? undefined : initialVal;

  for (let i in this) {
    if (accumulator !== undefined) {
      accumulator = callback(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};

let flattened = [[0, 1], , [4, 5]].myReduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened);
