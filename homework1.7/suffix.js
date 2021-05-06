function add_suffix (str) {
    return function (str1) {
        return str1 + str;
    }
};

const add_ly = add_suffix("less");
 console.log(add_ly("fear"));