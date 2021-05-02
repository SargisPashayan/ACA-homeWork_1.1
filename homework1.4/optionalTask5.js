let password = prompt("");
var passw=  /^[A-Za-z]\w{6,16}$/;
if (password.match(passw)) {
  alert("Correct, try another...");
} else {
  alert("Wrong...!");
}
