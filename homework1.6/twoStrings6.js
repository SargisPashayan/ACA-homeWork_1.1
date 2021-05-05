let first = 'Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather';
let second = "o";

let remove = function(str, word) {
    str = str.replaceAll(word, "");
    return str;
}
console.log(remove(first, second));