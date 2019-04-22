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
function comparefunction(a,b) {
    return a - b;
}
// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    var s_len = scores.length;
    var a_len = alice.length;
    var i,j,rank = [],count=1,temp=[];

   /* for (i = 0; i < a_len; i++) {
        count = 1;
        scores[s_len++] = alice[i];

        scores.sort(comparefunction);
        /*for (j = 0; j < s_len; j++) {
            console.log(scores[j]);
        }*/

        /*for (j = s_len - 1; j > 0; j--){
            if (scores[j] != scores[j - 1]) {
                if (alice[i] != scores[j]) {
                    count++;
                } else {
                    break;
                }
            }
        }              

        rank[i] =  count;
}*/
    var k = 0;
    for (i = 0; i < s_len - 1; i++) {
        if (scores[i] != scores[i + 1]) {
            temp[k] = scores[i];
            k++;
        }
    }
    if (scores[s_len - 1] != scores[s_len - 2])
        temp[k] = scores[s_len - 1];
    var t_len = temp.length;
    for (i = 0; i < t_len; i++) {
        process.stdout.write(temp[i]+' ');
    }
   // System.out.print(temp);
    var x = 0;
    for (i = a_len - 1; i >= 0;) {
        count = 1; 
            
            if (alice[i] >= temp[x] && x < t_len) {
                rank[i] = x+1;
                i--;
                //continue;
                //console.log(rank[i]);
            } else if(x < t_len){
                x++;
                //continue;
            } else {
                rank[i] = t_len + 1;
                i--;
                //continue;
            }
            
        //console.log(rank);
        /* (rank.length == alice.length)
            break;
            */
    }
    return rank;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
