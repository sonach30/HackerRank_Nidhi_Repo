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

// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    var i, len = s.length,j=0,str='',ascii=0;
    var letters = /^[A-Za-z]+$/;
    if (k > 26) {
        k = k % 26;
    }
    for (i = 0; i < len; i++) {
        if (s[i].match(letters)) {
            if (s[i] == s[i].toUpperCase()) {
                ascii = s[i].charCodeAt() - 64;
                console.log(s[i] + ' ' + ascii);
                if ((ascii + k) > 26) {
                    j = (ascii + k) - 26;
                    j = j + 64;
                    console.log(s[i] + ' ' + j);
                    str = str + String.fromCharCode(j);
                } else {
                    j = ascii + k;
                    j = j + 64;
                    console.log(s[i] + ' ' + j);
                    str = str + String.fromCharCode(j);
                    //console.log(String.fromCharCode(ascii + k) + ' '+ str);
                }

            } else {
                ascii = s[i].charCodeAt() - 96;
                console.log(s[i] + ' ' + ascii);
                if ((ascii + k) > 26) {
                    j = (ascii + k) - 26;
                    j = j + 96;
                    console.log(s[i] + ' ' + j);
                    str = str + String.fromCharCode(j);
                } else {
                    j = ascii + k;
                    j = j + 96;
                    console.log(s[i] + ' ' + j);
                    str = str + String.fromCharCode(j);
                    //console.log(String.fromCharCode(ascii + k) + ' '+ str);
                }
            }
        } else {
            str = str + s[i];
        }   

    }
    
    return str;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const k = parseInt(readLine(), 10);

    let result = caesarCipher(s, k);

    ws.write(result + "\n");

    ws.end();
}
