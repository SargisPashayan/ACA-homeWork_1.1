// function zipObject(keys, values) {
//   let obj = {};

//   for (let i = 0; i < keys.length; i++) {
//     if (values[i] === undefined) {
//       obj[keys[i]] = null;
//     } else {
//       obj[keys[i]] = values[i];
//     }
//   }

//   return obj;
// }

const zipObject = (keys, values) => {
  return keys.reduce((prev, key, i) => {
    if (!values[i]) {
      values[i] = null;
    }
    return Object.assign(prev, { [key]: values[i] });
  }, {});
};

console.log(zipObject(["a", "b", "c"], [1, , 3]));
