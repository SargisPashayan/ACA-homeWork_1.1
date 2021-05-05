let str = "“A revolution without dancing is a revolution not worth having.”";

let findLongestWord = function(str) {

    let max = -Infinity;
    let maxIndex = 0;
    let arr = str.replaceAll("," , "").split(" ");
    for(let i = 0; i < arr.length; i++) {
        if(max <= arr[i].length) {
            max = arr[i].length;
            maxIndex = i;
        }
    }
    return arr[maxIndex];
}
console.log(findLongestWord(str));