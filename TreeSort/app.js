'use strict';

const f = require('./functions');

let x = process.argv;

x = x.filter((s,i)=>i>1).map(s => parseInt(s));

console.log(x);
function main(arr) {
    return f.convertFromPairStructure(f.sort(arr));
}

console.log(main(arrToPair(x)));
console.log(f.check(x));

function arrToPair(arr) {

    let pair = [];

    arr.map(s => pair = [s, pair]);

    pair = f.inverse(pair);
    return pair;


}

