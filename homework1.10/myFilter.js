 const persons = [2, 45, 56, , 18, 0];
// const fullAge = persons.filter(person => person >= 18);
// console.log(fullAge);


// uzbekski
// function MyFilter(arr, callback) {
//   const filtered = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       filtered.push(arr[i]);
//     }
//   }
//   return filtered;
// }

// console.log(
//   MyFilter(persons, function (n) {
//     return n > 18;
//   })
// );

// advanced
Array.prototype.myFilter = function (callback) {
  arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
        arr.push(this[i]);
    }
  }
  return arr;
};

console.log(persons.myFilter(function (n) {
    return n >= 17;
}));

