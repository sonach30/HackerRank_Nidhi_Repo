function factorial(n) {
    var fact = 1;
    while (n > 0) {
        fact = fact * n;
        n--;
    }
    return fact;
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}