'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
function LeftRotation(a, n, d) {
    var index;
    var rotate;
    var len = a.length;
    var temp;
    var i;
    var string ="";

    for (rotate = 0; rotate < d; rotate++) {
        temp = a[0];
        for (index = 0; index < len-1; index++) {
            a[index] = a[index + 1];
        }
        a[index] = temp;
    } 
    for (i = 0; i < len; i++) {
        string += a[i]+" ";
    }
    console.log(string);
}


function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    LeftRotation(a, n, d);
}
