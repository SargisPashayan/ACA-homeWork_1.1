
//#10
let num = 5;
let fib0 = 0;
let fib1 = 1;
let fibNum = 0;

if (num === 0) {
    console.log(fib0);
}

else if (num === 1) {
    console.log(fib1);
}
 
else {
    for (let i = 2; i < num; i++) {
        finNum = fib0 + fib1;
        fib0 = fib1;
        fib1 = fibNum;
    }
    console.log(fibNum);
}