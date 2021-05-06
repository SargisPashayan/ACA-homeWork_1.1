function IsPolindrome (str) {
    if(str === str.split("").reverse().join("")){
        return "polindrom";

    }
    else{
        return "not polindrom";
    }
}

let word = "strrt"
console.log(IsPolindrome(word));