function filterByLengths(arr) {
    return arr.filter(item => item.length > 3);
}

console.log(filterByLengths(["kia", "tesla", "bmw", "mercedes"]))