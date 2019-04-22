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

// Complete the superReducedString function below.
function superReducedString(s) {
    console.log("enter");
    var i =0, str = "Empty String";
    var temp_s = '';
    var len = s.length;
    for (i = 1; i < len;) {
        console.log(s);
        console.log(s[i] + ' ' + s[i - 1]);
        if (s[i] == s[i - 1] && i!=0) {
            temp_s = s.substr(0,i-1)+s.substr(i + 1, len - 1);
            //console.log(temp_s);
            s = temp_s;
            i = 1;
            len = s.length;
            console.log("if" + i);
            //superReducedString(temp_s);
        }else if (s[i] == s[i - 1] && i == 0) {
            temp_s =  s.substr(i + 1, len - 1);
            //console.log(temp_s);
            s = temp_s;
            i = 1;
            len = s.length;
            console.log("if" + i);
            //superReducedString(temp_s);
        }else {
            i++;
            console.log("else"+ i);
            //superReducedString(s);
        } 
    }
    if (s.length == 0) {
        return str;
    } else {
        return s;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
