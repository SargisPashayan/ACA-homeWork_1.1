const str = ["JavaScript", "Python", "PHP", "Java", "C"];

function mapForEach(arr, callback) {

    const modArr = [];
    for (let i = 0; i < arr.length; i++) {
        modArr.push(callback(arr[i]));
    }
    return modArr;
}

const lengths = mapForEach(str, function (item) {
    return item.length;
});

console.log(lengths);
console.log(str);
