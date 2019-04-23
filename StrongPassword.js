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

// Complete the minimumNumber function below.
function minimumNumber(n,s) {
    // Return the minimum number of characters to make the password strong
    var len = 0,count_num = 0, count_lower = 0, count_upper = 0, count_special = 0,             count=0,i;
    if (n < 6) {
         len = 6 - n;
    } else {
        len = 0;
    }
    for (i = 0; i < n; i++) {
        if (s[i] == s[i].toLowerCase()) {
            count_lower++;
        } else if (s[i] == s[i].toUpperCase()) {
            count_upper++;
        } else if (s[i] == '!' || s[i] == '@' || s[i] == '#' || s[i] == '$' ||
            s[i] == '%' || s[i] == '^' || s[i] == '&' || s[i] == '*' ||
            s[i] == '(' || s[i] == ')' || s[i] == '-' || s[i] == '+') {
            count_special++;
        } else if (s[i] == '0' || s[i] == '1' || s[i] == '2' || s[i] == '3' ||
            s[i] == '4' || s[i] == '5' || s[i] == '6' || s[i] == '7' ||
            s[i] == '8' || s[i] == '9') {
            count_num++;
        }
    }
    
    if (count_lower == 0) {
        count++;
    } else if(count_num == 0) {
        count++;
    } else if (count_upper == 0) {
        count++;
    } else if (count_special == 0) {
        count++;
    }
    if (count <= len) {
        return len;
    } else {
        len = len + (count - len);
        return len;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
