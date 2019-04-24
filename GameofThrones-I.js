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

// Complete the gameOfThrones function below.
function gameOfThrones(s) {
    var ascii, alphabet = [], count=0, flag = 1, i, len = s.length; 

    for (i = 0; i < 26; i++) {
        alphabet[i] = 0;
    }

    for (i = 0; i < len; i++) {
        ascii = s[i].charCodeAt() - 97;
        console.log(ascii);
        alphabet[ascii] = alphabet[ascii] + 1;
    }
    console.log(alphabet);
    if (len % 2 == 0) {
        for (i = 0; i < 26; i++){
            if (alphabet[i] > 0) {
                if (alphabet[i] % 2 != 0) {
                    flag = 0;
                    break;
                }
            }
        }
    } else if(len % 2 !=0) {
        for (i = 0; i < 26; i++) {
            if (alphabet[i] > 0) {
                if (alphabet[i] % 2 == 0) {
                    flag = 1;
                } else {
                    count++;
                }
            }
        }
        if (count == 1) {
            flag = 1;
        } else {
            flag = 0;
        }
    }
    if (flag == 0) {
        return 'NO';
    } else {
        return 'YES';
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = gameOfThrones(s);

    ws.write(result + "\n");

    ws.end();
}
