'use strict';

const fs = require('fs');

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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    var row_index = 0;
    var col_index = 0;
    var max = -999;
    var tempmax;

    for (row_index = 0; row_index+2 < 6 ; row_index++) {
        for (col_index = 0; col_index+2 < 6; col_index++) {
            tempmax = (arr[row_index][col_index] + arr[row_index][col_index + 1] +
                arr[row_index][col_index + 2] + arr[row_index + 1][col_index + 1] +
                arr[row_index + 2][col_index] + arr[row_index + 2][col_index + 1] +
                arr[row_index + 2][col_index + 2]);
            if (max < tempmax) {
                max = tempmax;
                } 
        }
    }
    return max;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
