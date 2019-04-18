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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {  
    arr = arr.sort();
    var min=0,max=0,len = arr.length,i,str = '';
    for (i = 0; i < len-1; i++) {
        min = min + arr[i];
    }
    for (i = len-1; i >0; i--) {
        max = max + arr[i];
    }
    str = min + ' ' + max;
    console.log(str);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
