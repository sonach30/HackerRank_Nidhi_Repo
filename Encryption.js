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

// Complete the encryption function below.
function encryption(s) {
    var i=0, j, k=0, str = '';

    var s = s.replace(/\s/g, '');
    var l = s.length;

    var row = Math.floor(Math.sqrt(l));
    var col = Math.ceil(Math.sqrt(l));
    if (row * col < l) {
        row = col;
    }
    while (i < col) {
        k = i;
        j = 0;
        while (j < row && s[k]!=null) {
            str = str + s[k];
            j++;
            k = k + col;    
        }
        str = str + " ";
        i++;
    }
    console.log(str);
    return str;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
