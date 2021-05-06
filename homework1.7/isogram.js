function IsIsogram (str) {
    let arr = str.split("");
    let items = {};
    let dublicate = 0;
    arr.forEach(i => {
        items[i] = (items[i] || 0) + 1
    });

    for (let key in items) {
        if (items.hasOwnProperty(key)){
            items[key] > 1 ? dublicate++ : dublicate;
        }
    }
    if (dublicate > 0){
        return "not unique";
    }
    else{
        return "unique";
    }
}

console.log(IsIsogram("argis"));