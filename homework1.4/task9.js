//#9
let num = +prompt("");
let isPrime = true;
for(let i = 2; i < num; i++) {
    if(num % i === 0) {
        isPrime = false;
        break;
    }  
}
if(isPrime) {
    alert("YES")
}else{
    alert("NO")
}