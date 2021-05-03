// let strNum = prompt("");
// let num = 0;

// if (strNum[0] === "-" || strNum[0] === " " || strNum[0] === ".") {
//     strNum = strNum.slice(1);
// }

// for (let i = 0; i < strNum.length; i++) {
  
//   if (strNum.charCodeAt(i) >= 48 && strNum.charCodeAt(i) <= 57) {
//     num = num * 10 + strNum.charCodeAt(i) - 48;
//   } else {
//     console.log(num);
//     throw new NumberFormatException();
//   } 
// }

// console.log(num);


function myParseInt (str) {
    
    function toNumber (str) {
        let sign, result, base = 1, strArr = str.split("");
        if (strArr[0].match(/(\-|\+)/)) sign = strArr.shift();
        result = strArr.reduceRight(function(lastVal, val, idx, arr){
            let ret = (val * base) + lastVal;
            base *= 10;
            return ret;
        }, 0);
        return sign === "-" ? -result : result;   //function for returning number;
    }
  
    let matchArr = /^\s*((\-|\+)?[0-9]+)\s*/.exec(str); // deleting bad symbols;
    if (!matchArr) {
        return NaN; //not a number
    }
    return toNumber(matchArr[1]);
}

let testData = ["999.4",
                " -56   ",
                "",
                "   ",
                "0",
                "-0",
                "   0.00 ",
                " -9.9 ",
                "abc 95",
                "- 95.1",
                "-95.1x",
                " -45.23"];
                
testData.forEach(function(str){
    let myAnswer = myParseInt(str),
        refAnswer = parseInt(str, 10);

    if (myAnswer === refAnswer) {
        console.log('Correct: "%s" --> %s', str, myAnswer);
    } else if (isNaN(myAnswer) && isNaN(refAnswer)) {
        console.log('Correct: "%s" --> %s', str, myAnswer);
    } else {
        console.log('Wrong: "%s" --> %s. Should be %s', str, myAnswer, refAnswer);
    }
});
