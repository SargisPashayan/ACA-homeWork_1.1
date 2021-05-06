const sum = (num) => {
    return (num1) => num + num1;
};

const addOne = sum(3);

const addTen = sum(3);

console.log(addOne(2));
console.log(addTen(10));
