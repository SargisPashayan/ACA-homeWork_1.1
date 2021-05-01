let arr = [3, 56, 0, 10, 23, 76, 37];
let newArr = Array(100);
for(let i = 0; i < 100; i++) {
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] === i) {
            newArr[i] = arr[j];
        }
    }
    if(!newArr[i] && newArr[i] !== 0){
        newArr[i] = undefined;
    }
}
console.log(newArr);