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

// Complete the runningTime function below.
function runningTime(arr) {
    var i, j, value, count = 0, len = arr.length;
    for (i = 1; i < len; i++) {
        value = arr[i];
        j = i - 1;
        while (j >= 0 && value < arr[j]) {
            arr[j + 1] = arr[j];
            count++;
            j = j - 1;
        }
        
        arr[j + 1] = value;
    }
    console.log(count);
    /*for (j = 0; j < N; j++) {
        printf("%d", arr[j]);
        printf(" ");
    }*/
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = runningTime(arr);

    ws.write(result + "\n");

    ws.end();
}
