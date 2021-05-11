const filterArray = (arr) => {
    return arr.filter(item => !isNaN(parseInt(item)));
}

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN];

console.log(filterArray(arr));

