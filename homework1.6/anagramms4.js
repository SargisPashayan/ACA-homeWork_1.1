let word = "pencil";
let arrOfWords = ["licnep", "circular", "pupil", "leppnec", "nilcpe"];

const anagram = (str, arr) => {
    const anagrams = [];
    const sample = str.split('').sort().join('');
    
    arr.forEach(item => {
        if (item.split('').sort().join('') === sample) {
            anagrams.push(item);
        }
    });

    return anagrams;
}

console.log(anagram(word, arrOfWords));