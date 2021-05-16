const groupBy = (arr, fn) => {

  return arr.reduce((acc, elem, i) => {
    const key = fn(elem);
    acc[key] = acc[key] || [];
    acc[key].push(elem);
    return acc;
  }, {});
};

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], (i) => i.length));