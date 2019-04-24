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

// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
    var a_len = arr.length, b_len = brr.length, result = [], res = [], i, j, key, k = 0,
        temp_result = [];
    for (i = 0; i < 10000; i++) {
        res[i] = 0;
    }
    for (i = 0; i < a_len; i++){
        j = arr[i];
        console.log(j);
        res[j] = res[j] + 1;
        console.log(res[j]);
    }
    
    for (i = 0; i < b_len; i++){
        j = brr[i];
        console.log(j);
        if (res[j] > 0) {
            res[j] = res[j] - 1;
        } else if (res[j] == 0) {
            result[k] = j;
            k++;
        }
    }
    console.log(result);
    var len = result.length;
    for (i = 1; i < len; i++) {
        key = result[i];
        j = i - 1;
        while (j >= 0 && result[j] > key) {
            result[j + 1] = result[j];
            j = j - 1;
        }
        result[j + 1] = key;
    }
    k = 0;
    for (i = 0; i < len-1; i++){
        if (result[i] != result[i + 1]) {
            temp_result[k++] = result[i]; 
        }
    }
    if (result[len - 1] != result[len - 2]) {
        temp_result[k] = result[len - 1];
    }
    return temp_result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine(), 10);

    const brr = readLine().split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
