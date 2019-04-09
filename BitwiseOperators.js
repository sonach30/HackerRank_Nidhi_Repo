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
function getMaxLessThanK(n, k) {

    var index;
    var index1;
    var index2;
    var max = 0;
    var S = [];
    for (index = 1; index <= n; index++) {
        S[index] = index;
    }
    for (index1 = 1; index1 <= n; index1++) {
        for (index2 = index1 + 1; index2 <= n; index2++) {
            var tempmax = S[index1] & S[index2];
            if ((max < tempmax) && tempmax < k) {
                max = tempmax;
            }
        }
    }
    return max;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}