let arr = [10, 25, 16, -5, 30, 15, 24];
let num = 16;

let receivingLargerNums = function(num, arr) {
    let largerNums = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
            largerNums.push(arr[i]);
        }
    }
    if(largerNums.length === 0){
        return "Such values do not exist."
    }
    return largerNums;
}
console.log(receivingLargerNums(num, arr));