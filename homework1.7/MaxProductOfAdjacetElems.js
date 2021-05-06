function adjacentElementsProduct(arr) {

    let max = -Infinity;
    for (let i = 1; i < arr.length; i++) {
        max = Math.max(arr[i] * arr[i - 1], max);
    }
    return max;
}

let nums = [2, 4.5, -45, 5, 0, 5];
console.log(adjacentElementsProduct(nums));