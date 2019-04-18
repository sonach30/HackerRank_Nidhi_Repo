'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    var len = arr.length;
    //console.log(len);
    var sum1=0, sum2=0;
    var len = arr.length;
    var i, j;
    for (i = 0; i < len; i++) {
        for (j = 0; j < len; j++) {
            if (i == j) {
                sum1 = sum1 + arr[i][j];
            }
        }
    }
        for (i = 0; i < len; i++) {
            for (j = len - 1; j >= 0; j--) {
                //console.log(j + " " + (len - 1));
                if (i == Math.abs(j - (len - 1))) {
                    sum2 = sum2 + arr[i][j];
                    console.log(sum2);
                }
            }
        }
            console.log(sum1 + " " + sum2);
            return Math.abs(sum1 - sum2);
        
         
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
