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

// Complete the pairs function below.
function pairs(k, arr) {
    var len = arr.length, i, key, j, m, l, r, count = 0;
    for (i = 1; i < len; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    } 
    //console.log(arr);
    for (i = 0; i < len; i++){
        j = arr[i] + k;
        l = i+1;
        r = len - 1;
        console.log(j + " " + l +" "+ r);
        while (l <= r) {
            m =Math.floor( l + (r - l) / 2);

            if (arr[m] == j) {
                count++;
                break;
            }
             
            if (arr[m] < j)
                l = m + 1;

            else
                r = m - 1;
        } 
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = pairs(k, arr);

    ws.write(result + "\n");

    ws.end();
}
