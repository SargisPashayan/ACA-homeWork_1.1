let str = "fs 678.4";
let parse = "";

if (str[0] === "-" || strNum[0] === " " || strNum[0] === ".") {
    str= str.slice(1);
}

if (strNum[0] === "." && str.charCodeAt(1) >= 48 && str.charCodeAt(1) <= 57) {
    parse = "0.";
}

for (let i = 0; i < str.length; i++) {
  if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
    parse = parse + str[i];
  } else if (
    str.charCodeAt(i) < 48 &&
    str.charCodeAt(i) > 57 &&
    str.charCodeAt(i - 1) >= 48 &&
    str.charCodeAt(i - 1) <= 57
  ) {
    console.log(parse);
    break;
  } else {
    console.log("NaN");
    break;
  }
}