'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    var flag = 1;
    var revs
    try {
        revs = s;
        revs = s.split("");
        revs = revs.reverse();
        revs = revs.join("");
    } catch (err) {
        flag = 0;
        console.log(err.message);
    } finally {
        if (flag == 0) {
            console.log(s);
        } else {
            console.log(revs);
        }
    }
}

