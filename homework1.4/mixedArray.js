let arr = [null, null, 'grrhg', 4, 45, 8, 8, 3];
let result = arr.filter(item => (typeof item === 'number' && item % 2 !== 0));
arr.forEach(item => {
    if (item % 2 === 0 && typeof item === 'number') result.push(item);
})
console.log(result);