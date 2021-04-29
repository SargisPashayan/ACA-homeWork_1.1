let num = prompt("");
let prod = 1;
let sum = 0;
if(num.includes("0")){
    alert(`Cannot calculate.`);
    throw new Error('This is not an error. This is just to abort javascript');
}
for (let i = 0; i < num.length; i++) {
    sum = sum + +num[i];
    prod = prod * num[i];
}
if(prod % sum === 0) {
    alert(`Quotient is ${prod/sum}`);
}
else {
    alert(`Reminder is ${prod%sum}`);
}