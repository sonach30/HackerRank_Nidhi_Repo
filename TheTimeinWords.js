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

// Complete the timeInWords function below.
function timeInWords(h, m) {
    var number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"];
    var str = '';
    if (m == '0') {
        str = number[h] + ' ' + "o' clock";  
    }
    else if (parseInt(m) < 30 && parseInt(m)!=15 && m!=1) {
        str = number[m] + ' minutes past ' + number[h];  
    }
    else if (parseInt(m) < 30 && parseInt(m) != 15 && m==1) {
        str = number[m] + ' minute past ' + number[h];
    }
    else if (parseInt(m) == 15) {
        str = 'quarter past ' + number[h];
    }
    else if(parseInt(m) == 45 && h==12) {
        str = 'quarter to ' + number[1];
    }
    else if (parseInt(m) == 45 && h != 12) {
        str = 'quarter to ' + number[h+1];
    }
    else if (parseInt(m) == 30) {
        str = 'half past ' + number[h];
    }
    else if (parseInt(m) > 30 && parseInt(m)!=45 && h==12 && (60-m)!=1) {
        str = number[60 - m] + ' minutes to ' + number[1];
    }
    else if (parseInt(m) > 30 && parseInt(m) != 45 && h == 12 && (60-m)==1) {
        str = number[60 - m] + ' minute to ' + number[1];
    }
    else if (parseInt(m) > 30 && parseInt(m) != 45 && h != 12 && (60 - m)==1) {
        str = number[60 - m] + ' minute to ' + number[h+1];
    }
    else if (parseInt(m) > 30 && parseInt(m) != 45 && h != 12 && (60 - m) != 1) {
        str = number[60 - m] + ' minutes to ' + number[h + 1];
    }
    return str;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}
