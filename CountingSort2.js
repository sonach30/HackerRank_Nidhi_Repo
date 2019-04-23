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

// Complete the countingSort function below.
function countingSort(arr) {
    var i, len = arr.length, result = [], res = [], j = 0, count = 0,k=0;
    for (i = 0; i < 100; i++) {
        result[i] = 0;
    }
    for (i = 0; i < len; i++) {
        j = arr[i];
        result[j] = result[j] + 1;
    }
    for (i = 0; i < 100; i++) {
        if (result[i] > 1) {
            j = result[i];
            count = 0;

            while (count < j) {
                res[k] = i;
                k++;
                count++;
                
            }
        } else if(result[i]==1) {
            res[k] = i;
            k++;
        } 
        
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = countingSort(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
