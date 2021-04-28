alert( alert(1) && alert(2) ); // alert(1) print 1 and return value undefined then global alert print undefined


let age;
if(age >= 14 && age <= 94); // age 


if (-1 || 0) alert('first'); // print(boolean of -1 is true)
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third');


let user = prompt("Who's there?", "");

if (user === "Admin") {
  let pass = prompt("Password?", "");

  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (user === "" || user === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}


