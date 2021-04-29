
//#6
let num1 = +prompt("");
let num2 = +prompt("");
let num3 = +prompt("");

let arr = [num1, num2, num3];
let isZero = false;

let c = 0;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
        alert("unsinged");
        isZero = true;
        break;
    }

    else if(arr[i] < 0) {
        c++;
    }
}
if (isZero) {
    throw new Error('This is not an error. This is just to abort javascript');
};
if (c % 2 === 0) {
  alert("+");
} else {
  alert("-");
}