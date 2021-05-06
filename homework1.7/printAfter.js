const print = () => "Elon Musk";

function printAfter (fn) {
    console.log("Hello world");
    return fn;
}

console.log(printAfter(print()));