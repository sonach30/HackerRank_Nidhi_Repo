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

// Complete the closestNumbers function below.
function closestNumbers(arr) {
    var i, j, value, len = arr.length, min = 99999999, diff, result = [], k = 0;

    for (i = 1; i < len; i++) {
        value = arr[i];
        j = i - 1;
        while (j >= 0 && value < arr[j]) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = value;
    }
    for (i = 1; i < len; i++) {
        diff = Math.abs(arr[i] - arr[i - 1]);
        if (min > diff) {
            min = diff;
        }
        
    }
    console.log(min);
    for (i = 1; i < len; i++) {
        diff = Math.abs(parseInt(arr[i]) - parseInt(arr[i - 1]));
        if (min == diff) {
            result[k++] = arr[i-1]
            result[k++] = arr[i];
            
        }

    }
    console.log(result); 
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
