//#4
let num = prompt("write a numberis a multiple of 3, 5 or 7", "");
if (num % 3 == 0 || num % 5 == 0 || num % 37 == 0)
  alert(`${num} is a multiple of 3, 5 and 7`);
else if (num % 3 == 0 || num % 5 == 0) alert(`${num} is a multiple of 3 and 5`);
else if (num % 3 == 0 || num % 7 == 0) alert(`${num} is a multiple of 3 and 7`);
else if (num % 5 == 0 || num % 7 == 0) alert(`${num} is a multiple of 5 and 7`);
else if (num % 3 == 0) alert(`${num} is a multiple of 3`);
else if (num % 5 == 0) alert(`${num} is a multiple of 5`);
else if (num % 7 == 0) alert(`${num} is a multiple of 7`);
else  alert(`${num} is a not multiple of 3,5 or 7`);
