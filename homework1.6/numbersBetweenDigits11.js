let inputMin = 99;
let inputMax = 199;


let findIntervalNums = function(numMin, numMax) {
    let arr = [];
    let res = [];
    for(i = numMin; i <= numMax; i++) {
        if(i % 2 === 0){
            arr.push(i);
        }
    }

    for(let i = 0; i < arr.length; i++) {

        arr[i] = arr[i].toString();
        
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] % 2 === 0 && arr[i][j + 1] % 2 === 0) {
                res.push(parseInt(arr[i]));
            }else {
                break;
            }
        }
    }
    if(res.length === 0) {
        return "Such numbers does not exist."
    }else {
        return res;
    }
}
console.log(findIntervalNums(inputMin, inputMax));