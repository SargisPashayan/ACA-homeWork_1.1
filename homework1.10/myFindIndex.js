Array.prototype.myFind = function (callback) {
    let finded = -1;
  
    for (let index in this) {
      if (callback(this[index], index, this)) {
        finded = index;
        break;
      }
    }
  
    return finded;
  };
  
  function isPrime(element) {
    let start = 2;
  
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
  
    return element > 1;
  };
  
  console.log([4, 46, 8, 12].myFind(isPrime));
  