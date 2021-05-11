const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

function Sum (arr) {
    let sum =  arr.reduce((total, item) => item >= 18 ? total + item: total, 0);
    return sum;
}

console.log(Sum(arr));