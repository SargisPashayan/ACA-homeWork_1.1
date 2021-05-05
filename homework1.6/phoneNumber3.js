let num = prompt("");
let arr = num.replaceAll(" ", '');

function ValidPhoneNumber (phoneNumber) {
    if (phoneNumber[0] === "+" && phoneNumber.length <= 11) {
        return phoneNumber.slice(1);
    } 
    else if (phoneNumber.length === 10 && phoneNumber.includes("+") && phoneNumber[0] !== "+") {
        return "Bad number";
    }
    else if (phoneNumber.length === 11 && phoneNumber.includes(" ")){
        return parseInt(phoneNumber);
    } 
    else if (phoneNumber.includes("+") && phoneNumber[0] !== "+") {
        return "Bad number";
    }
    else if (phoneNumber.length > 10 && phoneNumber.length < 10){
        return "Bad number";
    }
    else {
        return "Good";
    } 
    
}

console.log(ValidPhoneNumber(arr));