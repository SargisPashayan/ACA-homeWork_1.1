let arr = ['fjdnghj', 'rege', 'heyW', 'katalizatorA', 'javGU'];
let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if(arr[i].length <= min.length){
        min = arr[i];
    }
    if(arr[i].length >= max.length){
        max = arr[i];
    }
}
console.log(min.length + max.length);