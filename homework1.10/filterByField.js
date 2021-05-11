const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

const filterArray = (arr, str) => {
    return arr.filter(item => item[str] === true);
}

console.log(filterArray(users, "isAstronaut"));
