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
var B = [];
function readLine() {
    return inputString[currentLine++];
}
function isLeaf(pos, size) {
    if (pos >=parseInt(size / 2) && pos <= size) {
        return true;
    }
    return false;
}
function swap(fpos, spos) {
    var tmp;
    tmp = B[fpos];
    B[fpos] = B[spos];
    B[spos] = tmp;
}
function minHeapify(pos) {
    // If the node is a non-leaf node and greater 
    // than any of its child 
    if (!isLeaf(pos, B.length)) {
        if (B[pos] > B[2 * pos] || B[pos] > B[(2 * pos) + 1]) {

            // Swap with the left child and heapify 
            // the left child 
            if (B[2 * pos] < B[(2 * pos) + 1]) {
                swap(pos, 2 * pos);
                minHeapify(2 * pos);
            }

            // Swap with the right child and heapify  
            // the right child 
            else {
                swap(pos, (2 * pos) + 1);
                minHeapify((2 * pos) + 1);
            }
        }
    }
} 
function insert(element,size) {
    B[size] = element;
    var current = size;
    console.log(B[parseInt(current / 2)]+"hello");
    while (B[current] < B[parseInt(current / 2)]) {
        console.log("insert while");
        swap(current, parseInt(current / 2));
        current = parseInt(current / 2);
    }
} 
/*
 * Complete the cookies function below.
 */
function cookies(k, A) {
    var i, temp, j = 0, pos,count=0;
    B[0] = 0;
    B = A;
   
    while (k > B[0]) {
        console.log(B);
        var len = B.length;
        
        j = 0;
        temp = B[0] + 2 * B[1];
        insert(temp, j);
        j++;
        for (i = 2; i < len; i++ , j++) {
            insert(B[i], j);
        }
        len = len - 1;
        for (pos = parseInt(len / 2); pos >= 1; pos--) {
            minHeapify(pos);
        }
        count++;
        
    }
    return count;
}

      

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const A = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));

    let result = cookies(k, A);

    ws.write(result + "\n");

    ws.end();
}
