function extractCurrencyValue(str) {
    return +str.slice(1); // str from str[0] to [end] turn to number
}


function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 1) + '…';
    }
    else {
        return str;
    }
}