let arr = [21, 0, -9, 2115, -898, 0, 10];
let num = -899;
let min = Math.abs(num - arr[0]);
let index = 0;
for (let i = 1; i < arr.length; i++){
    if(Math.abs(num - arr[i]) < min) {
        index = i;
        min = Math.abs(num - arr[i]);
    }
}
console.log(index);