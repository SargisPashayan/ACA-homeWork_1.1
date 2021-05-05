let str = "aweyoolp";

let charMoving = function (str) {

    let arr = str.split("");
    for (let i = 0; i < arr.length - 2; i += 3) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = arr[i + 2];
        arr[i + 2] = temp;
    }
    return arr.join("");
}
console.log(charMoving(str));