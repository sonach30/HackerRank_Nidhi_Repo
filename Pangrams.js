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

// Complete the pangrams function below.
function pangrams(s) {
    var ascii, alphabet = [], i, len = s.length, flag =0;
    alphabet.fill(0, 0, 25);
    s = s.toUpperCase();
    for (i = 0; i < len; i++) {
        if (s[i] != ' ') {
            ascii = s[i].charCodeAt()-65;
            alphabet[ascii] = 1;
        } 
    }
    for (i = 0; i < 26; i++) {
        if (alphabet[i] == '1') {
            flag = 1;
        } else {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        return 'pangram';
    } else {
        return 'not pangram'
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = pangrams(s);

    ws.write(result + "\n");

    ws.end();
}
