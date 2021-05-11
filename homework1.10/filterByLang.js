const users = [
  {
    username: "Yuri Gagarin",
    lang: "RU",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

const filterArray = (arr) => {
    return arr.filter(item => item.lang !== "RU");
}

console.log(filterArray(users));
