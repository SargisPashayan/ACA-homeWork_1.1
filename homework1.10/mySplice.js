Array.prototype.mySplice = function (start, deleteCount, ...items) {
  let resultArray = [];
  let stop = this.length;

  function copy(source, self) {
    for (let index = 0; index < source.length; index++) {
      self[index] = source[index];
    }
    self.length = source.length;
  }

  if (start < 0) {
    start = start + this.length;
  }

  if (deleteCount) {
    stop = start + deleteCount;
    if (deleteCount < 0) {
      stop = 0;
    }
  }

  for (let i = start; i < stop; i++) {
    const el = this[i];
    resultArray.push(el);
  }

  if (deleteCount && items.length <= 0) {
    let deleteArr = [];
    for (let i = 0; i < this.length; i++) {
      let el = this[i];
      if (i === start) {
        i = stop - 1;
      } else {
        deleteArr.push(el);
      }
    }
    copy(deleteArr, this);
  }

  if (items.length > 0) {
    let finalArr = [];
    for (let i = 0; i < this.length; i++) {
      let el = this[i];
      if (i === start) {
        finalArr = [...finalArr, ...items];
        i = stop - 1;
      } else {
        finalArr.push(el);
      }
    }
    copy(finalArr, this);
  }

  return resultArray;
};

const arr = [56, 66, 99, 44];
const spliceArr = arr.mySplice(1, 2, 0, 1);

console.log(arr, spliceArr);
