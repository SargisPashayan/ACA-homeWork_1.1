let arr = [1, 3, 5, 9];

function ArrSeparator (arr) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            arr2.push(arr[i]);
        }
        else {
            arr1.push(arr[i]);
        }
    }
    console.log(arr1, arr2);
}

ArrSeparator(arr);