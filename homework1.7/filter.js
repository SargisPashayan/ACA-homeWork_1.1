const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

function filterFalsyValues(arr) {
    return arr.filter(item => !!item);
}

console.log(filterFalsyValues(values));