let inputArr = [23, 67, 0, -23, 73];
let sign = prompt("Please write a sign");


let sum = function(arr) {
    let sum = arr[0]; 
    for(let i = 1; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
let def = function(arr) {
    let def = arr[0];
    for(let i = 1; i < arr.length; i++) {
        def = def - arr[i];
    }
    return def;
}
let multiple = function(arr) {
    let res = arr[0];
    for(let i = 1; i < arr.length; i++) {
        res = res * arr[i];
    }
    return res;
}
let div = function(arr) {
    let res = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] === 0) {
            return ("undefined");
        }
        res = res / arr[i];
    }
    return res;
}
switch (sign) {
    case "+":
        console.log(sum(inputArr));
        break;
    case "-":
        console.log(def(inputArr));
        break;
    case "/":
        console.log(div(inputArr));
        break;
    case "*":
        console.log(multiple(inputArr));
        break;
    default:
        alert("Please write one of this these signs: + , - , / , *")
};