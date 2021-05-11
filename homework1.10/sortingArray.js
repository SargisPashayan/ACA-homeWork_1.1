function sortBy(arr, str) {
    if(str === "Asc") {
        return arr.sort((a,b) => a - b);
    }
    else if(str === "Desc") {
        return arr.sort((a,b) => b - a);
    }
    else {
        return arr;
    }
}

console.log(sortBy([7, 8, 11, 66], "Desc"));