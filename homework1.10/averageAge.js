const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function getAverageAge (arr) {
    let averageAge =  arr.reduce((total, item) => total + item.age, 0);
    return averageAge / arr.length;
}

console.log(getAverageAge(users));
