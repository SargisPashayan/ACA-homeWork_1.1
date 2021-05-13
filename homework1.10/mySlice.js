Array.prototype.mySlice = function (start, end) {
  let stop = this.length - 1;
  let resultArr = [];

  if (start === undefined) {
    return resultArr;
  }

  if (start < 0) {
    start = start + this.length;
  }

  if (end !== undefined && end > 0) {
    stop = end - 1;
  }

  for (let index = start; index <= stop; index++) {
    let element = this[index];
    resultArr.push(element);
  }

  return resultArr;
};

const arr = [56, 66, 99, 44];
const sliceArr = arr.mySlice(-3);

console.log(arr, sliceArr);
