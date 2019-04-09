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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var letter = 0;
    var len = s.length;
    while (letter < len) {
        if (s[letter] == 'a' || s[letter] == 'e' || s[letter] == 'i' || s[letter] == 'o' || s[letter] == 'u') {
            console.log(s[letter]);
            letter++;
        } else {
            letter++;
        }
    }
    letter = 0;
    while (letter < len) {
        if (s[letter] != 'a' && s[letter] != 'e' && s[letter] != 'i' && s[letter] != 'o' && s[letter] != 'u') {
            console.log(s[letter]);
            letter++;
        } else {
            letter++;
        }
    }
    
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}