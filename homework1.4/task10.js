
//#10
let num = 20;
let fib0 = 0;
let fib1 = 1;
let fibNum = 0;

if (num === 0) {
    console.log(fib0);
    throw new Error('This is not an error. This is just to abort javascript');
}

if (num === 1) {
    console.log(fib1);
    throw new Error('This is not an error. This is just to abort javascript');
}
 
for (let i = 2; i <= num; i++) {
    fibNum = fib0 + fib1;
    fib0 = fib1;
    fib1 = fibNum;
}
console.log(fibNum);