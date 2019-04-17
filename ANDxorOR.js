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
 * Complete the andXorOr function below.
 */

var stack = [];

function empty() {
    return stack.length == 0;
}

function peek() {
    return stack[stack.length - 1];
}

function andXorOr(a) {
    var number, result=0;
    for (number in a) {
        //console.log(empty());
        while (empty() == false) {
            //console.log(S(a[number], peek()));
            result = Math.max(result, S(a[number], peek()));
            //console.log(result);
            if (a[number] < peek()) {
                //console.log(stack.pop());
                stack.pop();   
            } else {
                break;
            }
        }
        stack.push(a[number]);
        //console.log(stack);
    }
    return result;
}

function S(x, y) {
    return ((x & y) ^ (x | y)) & (x ^ y);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const aCount = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = andXorOr(a);

    ws.write(result + "\n");

    ws.end();
}
