let a = {a: 1};
let b = {a: 1, b: 2};

function shallowCompare(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
      console.log(false);
      return;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}

shallowCompare(a, b);
