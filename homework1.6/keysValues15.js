let obj = {a: 1, b: 2, c: 2, d: 2};

const invertKeyValues = (obj) =>

  Object.keys(obj).reduce((acc, key) =>
  {
    const val = obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});

console.log(invertKeyValues(obj));