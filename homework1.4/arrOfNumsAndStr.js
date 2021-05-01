let arr = [4, 67, 'hey', 56, 'type'];
let numsCount = 0;
let strCount = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") numsCount++;
  else if (typeof arr[i] === "string") strCount++;
}
console.log(`Numbers: ${numsCount} Stings: ${strCount}`);