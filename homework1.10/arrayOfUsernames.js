const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];


let getUsernames = function(arr) {
    return arr.map(item => item.username);
}

console.log(getUsernames(users));

