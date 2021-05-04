let readers = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];

let positiveStatusReaders = [];
for (let i = 0; i < readers.length; i++) {
    if(readers[i].readStatus === true) {
        positiveStatusReaders.push(readers[i]);
    }
}

let updateReaders =  positiveStatusReaders.sort( function ( a, b ) { 
    return (a.percent >= b.percent)?-1:1;
} );
console.log(updateReaders);