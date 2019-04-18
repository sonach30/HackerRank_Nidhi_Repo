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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    var hour;
    var arr = [];
    var sec = [];
    var str = '';
    arr = s.split(":");

    if (arr[2].includes("PM")) {
        sec = arr[2].split("PM");
        if (arr[0] == 12) {
            hour = '12';
        } else {
            hour = 12 + parseInt(arr[0]);
        } 
    } else {
        sec = arr[2].split("AM");   
        if (arr[0] == 12) {
            hour = '00';
        } else {
            hour = arr[0];
        }
    }
    
   // sec = sec.split(",");
    str = hour + ':' + arr[1] + ':' + sec[0];
    return str;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
