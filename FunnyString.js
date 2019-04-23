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

// Complete the funnyString function below.
function funnyString(s) {
    var i, len = s.length, flag = 1, j, arr = [];
    for (i = 0; i < len; i++) {
        arr[i] = s[i].charCodeAt();
    }
    for (i = 0; i < len; i++) {
        console.log(arr[i])
    }
    j = len-1;
    for (i = 1; i < len; i++,j--) {
        console.log("s" + Math.abs(arr[i] - arr[i - 1]) + " " + "revs" +
            Math.abs(arr[j] - arr[j - 1]));
        if (Math.abs(arr[i] - arr[i - 1]) != Math.abs(arr[j] - arr[j - 1])) {
            flag = 0;
            break;
        } else {
            flag = 1;
       }
    }
    if (flag == 1) {
        return 'Funny';
    } else {
        return 'Not Funny';
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = funnyString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
