Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
};

let arr = ["biggy smalls", "tupac", "ice cub", "eazy e", "wiz khalifa"];
arr.myForEach( name => {
  console.log(name);
});
