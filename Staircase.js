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

// Complete the staircase function below.
function staircase(n) {
    var str ='',i,j;
    for (i = n; i > 0; i--) {
       
        for (j = 1; j <i; j++) {
            str = str+' ';
        }
        for (j = i; j <= n; j++) {
            str = str + '#';
        }
        str = str + '\n';
    }
    console.log(str);
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
