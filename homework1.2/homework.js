let i = 10;
let n = i++ % 5;
console.log (n); // 0

/*let a = 10, b = 3;
let c = 0;
c = a; // c = 10
a = b; // a = 3
b = c; // b = 10
console.log(a, b)*/

/*let a = 10, b = 3;
a = a + b; // a = 13
b = a - b; // b = 10
a = a - b; // a = 3
console.log(a, b)*/

let a = 10, b = 3;
a = a ^ b; //a = 9
b = a ^ b; //b = 10
a = a ^ b; // a = 3
console.log(a, b);

let name, admin;
name = "John";
admin = name;
console.log(admin);
