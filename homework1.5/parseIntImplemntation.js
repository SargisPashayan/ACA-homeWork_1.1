let strNum = prompt("");
let num = 0;

if (strNum[0] === "-" || strNum[0] === " " || strNum[0] === ".") {
    strNum = strNum.slice(1);
}

for (let i = 0; i < strNum.length; i++) {
  
  if (strNum.charCodeAt(i) >= 48 && strNum.charCodeAt(i) <= 57) {
    num = num * 10 + strNum.charCodeAt(i) - 48;
  } else {
    console.log(num);
    throw new NumberFormatException();
  } 
}

console.log(num);
