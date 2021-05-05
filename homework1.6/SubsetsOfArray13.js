let subsetArray = (function() {
    return {
      getResult: getResult
    }
  
    function getResult(array, n) {
  
      function isBigEnough(value) {
        return value.length === n;
      }
  
      let ps = [ [] ];

      for (let i = 0; i < array.length; i++) {
        for (let j = 0, len = ps.length; j < len; j++) {
          ps.push(ps[j].concat(array[i]));                   // loop build all subsets
        }
      }
      return ps.filter(isBigEnough);                         // check length of subsets
    }
})();

let arr = [5, 9, 23, 0, -2, -1];
console.log(subsetArray.getResult(arr, 3));