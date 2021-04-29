//#7
let digit = +prompt("digit","");
let num = +prompt("number","");
let numStr = num + "";
let digitStr = digit + "";
if(numStr.indexOf(digitStr) === -1) {
    console.log("NO")
}else {
    console.log("YES")
}
