let str = prompt("");
let min = str[0];
let max = str[0];

for (let i = 1; i < str.length; i++) {
    if(+str[i] <= min){
        min = +str[i];
    }
    if(+str[i]>= max){
        max = +str[i];
    }
}
console.log(max - min);