const strToInt = arr => {
    return arr.map(item => Number.isNaN(parseInt(item)) ? null: parseInt(item));
}

console.log(strToInt(["1", "34px", "klor"]))