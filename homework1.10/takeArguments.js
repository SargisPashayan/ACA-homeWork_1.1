function sum() {
  
  return Object.values(arguments).reduce((sum, current) => {  // arguments in function is object
    return sum + current;
  });
  
}

console.log(sum(1, 4, 6));