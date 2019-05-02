function getRes(a, n, index, cur, ans) {
    if( cur % 101 === 0 )
        return ( index < n
                ? (ans + '*' + a.slice(index).join('*'))
                : ans
        );
    if ( index === n )
        return '';
    
    var tmp;
    tmp = getRes(a, n, index+1, cur + +a[index], ans + '+' + a[index].toString())
    if ( tmp !== '' )
        return tmp;
    tmp = getRes(a, n, index+1, cur - +a[index], ans + '-' + a[index].toString())
    if ( tmp !== '' )
        return tmp;
    tmp = getRes(a, n, index+1, cur * +a[index], ans + '*' + a[index].toString())
    if ( tmp !== '' )
        return tmp;
    
    return '';
}

function processData(input) {
    input = input.split('\n');
    var n = +input[0];
    var a = input[1].split(' ').map(Number);
    console.log( getRes( a, n, 1, a[0], a[0].toString() ) );
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