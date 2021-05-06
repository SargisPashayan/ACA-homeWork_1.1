function SumOfEvens (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0){
            sum = sum + arr[i];
        }
    }
    return sum;
}

let arr1 = [1, 30, 45, 0, -75, -3];
console.log(SumOfEvens(arr1));