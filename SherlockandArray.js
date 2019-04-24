'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the balancedSums function below.
function balancedSums(arr) {
    /*var len = arr.length, i = 0, j = len - 1, nl_sum = 0, nr_sum = 0, pl_sum = 0,
        pr_sum = 0;
    for (i = 0; i < len; i++) {
        pr_sum = pr_sum + arr[i];
    }
    i = 0;
    while (i<len) {
        nl_sum = nl_sum + arr[i];
        nr_sum = pr_sum - arr[i];

        if (pr_sum > nr_sum) {
            console.log(nl_sum + " " + pl_sum + "--" + nr_sum + " " + pr_sum);
            pr_sum = nr_sum;
            pl_sum = nl_sum;
        } else if (pr_sum <= nr_sum) {
            console.log("hello");
            pr_sum = nr_sum;
            pl_sum = nl_sum;
            break;
        }

        i++;
    }
    console.log(nl_sum + " " + nr_sum + "bahar" + pl_sum + " " + pr_sum);
    if (pl_sum == nr_sum && pr_sum == nl_sum)
        return "YES";
    else
        return "NO";
 */
    var len = arr.length, i = 0, l_sum = 0, r_sum = 0, j;
    for (i = 0; i < len; i++){
        l_sum = 0;
        r_sum = 0;
        for (j = 0; j < i; j++) {
            l_sum = l_sum + arr[j];
        }
        console.log("l_sum"+ l_sum);
        for (j = i + 1; j < len; j++) {
            r_sum = r_sum + arr[j];
        }
        console.log("r_sum" + r_sum);
        if (l_sum == r_sum) {
            return "YES";
        }
    }   
    return "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
