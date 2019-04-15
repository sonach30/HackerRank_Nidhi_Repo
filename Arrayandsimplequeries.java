function processData(input) {
    //Enter your code here
    var len = input[0] * 2 + input[2] * 6 + 4;
    var count_query;
    var query = [[]];
    var x = 0;
    var y = 1, j = 1, k;
    var i;
    var value = [];
    var tempvalue = [];
    var value_len;
    var newvalue = [];
    for (i = (input[0] * 2) + 4; i < len; i = i + 6) {
        query[[x, 0]] = input[i];
        query[[x, 1]] = input[i + 2];
        query[[x, 2]] = input[i + 4];
        x++;
    }
    for (i = 4; i < input[0] * 2 + 3; i = i + 2) {
        value[y++] = input[i];

    }
    //console.log(query[[0,0]]);
    value_len = value.length;
    tempvalue_len = tempvalue.length;
    for (i = 0; i < x; i++) {
        var chk = query[[i, 0]];
        //console.log(chk);
        switch (chk) {

            case '1':
              //console.log(query[[i, 1]]);
                j = 1;
                tempvalue = [];
                for (k = query[[i, 1]]; k <= query[[i, 2]]; k++) {
                tempvalue[j] = value[k];
                    j++;
                    //console.log(value+" "+"value" + j + " "+tempvalue + "tempvalue");
                }
                //console.log(tempvalue+ " " +j+"first time");
                for (k = 1; k < query[[i,1]]; k++) {
                    tempvalue[j] = value[k];
                    j++;
                   // console.log(value+ " " +j+" "+ k+"first time");
                }
                //console.log(query[[i, 2]] + "before index");
                var lastindex = parseInt(query[[i, 2]]) + 1;
                for (k = lastindex; k <= input[0]; k++) {
                    tempvalue[j] = value[k];
                    j++;
                    //console.log(k + "third time");
                }
                value = tempvalue;
                //console.log(value+"finally");
                break;

            case '2':
                //console.log(query[[i, 1]]);
                j = 8-(parseInt(query[[i, 2]]) - parseInt(query[[i, 1]]));
                tempvalue = [];
                for (k = query[[i, 1]]; k <= query[[i, 2]]; k++) {
                    tempvalue[j] = value[k];
                    j++;
                    //console.log(value + " " + "value" + j + " " + tempvalue + "tempvalue");
                }
                j = 1;
                //console.log(tempvalue+ " " +j+"first time");
                for (k = 1; k < query[[i, 1]]; k++) {
                    tempvalue[j] = value[k];
                    j++;
                 //   console.log(value + " " + j + " " + k + "first time");
                }
                //console.log(query[[i, 2]] + "before index");
                var lastindex = parseInt(query[[i, 2]]) + 1;
                for (k = lastindex; k <= input[0]; k++) {
                    tempvalue[j] = value[k];
                    j++;
                    //console.log(k + "third time");
                }
                value = tempvalue;
                //console.log(value + "finally");
                break;

            default:
                break;
        }
    }
    //console.log(Math.abs(value[input[0]] - value[1]));
    var str = "";
    str = str + Math.abs(value[input[0]] - value[1]) + "\n";
    for (i = 1; i <= input[0]; i++)
    {
        str = str + value[i]+" ";
    }
    console.log(str); 
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
