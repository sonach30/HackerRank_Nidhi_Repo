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

// Complete the marsExploration function below.
function marsExploration(s) {
    var len = s.length, str = '', count = 0, i;
    console.log("len" + len);
    for (i = 0; i < len; i = i + 3) {
        //console.log("iterations"+ i);
        console.log(str.localeCompare("SOS"));
        if (s[i].localeCompare("S") != 0) {
            count++;
        }
        if (s[i + 1].localeCompare("O") != 0) {
            count++;
        }
        if (s[i + 2].localeCompare("S") != 0) {
            count++;
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = marsExploration(s);

    ws.write(result + "\n");

    ws.end();
}
