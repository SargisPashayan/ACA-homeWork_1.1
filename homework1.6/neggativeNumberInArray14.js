let matrix = [1, 2, 3];

function ProductOfNeggativeNubers (arr) {

    let prod = 1;

    for (let i = 0; i < arr.length; i++) {
       if(!Array.isArray(arr[i])){
           
           return "Invalid";
       }
       let filtered = arr[i].filter(item => item < 0);
       if (filtered.length === 0) {
        prod = prod * 1;
       } 
       else {
        prod *= Math.max(...filtered);
       } 
    }
    console.log(prod);
    return prod;
}

console.log(ProductOfNeggativeNubers(matrix));