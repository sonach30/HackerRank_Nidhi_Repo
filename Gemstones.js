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

// Complete the gemstones function below.
function gemstones(arr) {
    var alphabet = [], count=0, len = arr.length, i, j, ascii;
    //console.log(arr[0][1]);
    for (i = 0; i < 26; i++) {
        alphabet[i] = 0;
    }
    
    for (i = 0; i < len; i++){
        for (j = 0; j < arr[i].length; j++) {
            ascii = (arr[i][j].charCodeAt()) - 97;
            //console.log(arr[i][j] + ' ' + alphabet[ascii]);
            
            if (alphabet[ascii] == i) {
                alphabet[ascii] = alphabet[ascii] + 1;
                console.log(arr[i][j] + ' ' + alphabet[ascii]);
            }
        }
    }
    for (i = 0; i < 26; i++){
        if (alphabet[i] == len) {
            console.log(alphabet[i]);
            count++;
            //ascii = ascii + 97;
            //str = str + String.fromCharCode(ascii);
        }
    }
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    let result = gemstones(arr);

    ws.write(result + "\n");

    ws.end();
}
