let sentence = "_, we have a _";
let arr = ["Huston", "lord"];
let str = sentence.split(" ");
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(str[i] === "_"){
            str[i] = arr[j];
            arr.shift();
        }
        else if(str[i] === "_,") {
            str[i] = arr[j] + ",";
            arr.shift();
        }
    }
}
console.log(str.join(" "));