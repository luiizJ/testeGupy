function isFibonacciNumber(num) {
    if (num < 0) return false;

    let a = 0, b = 1;
    while (b < num) {
        [a, b] = [b, a + b];
    }
    return b === num;
}

const numberToCheck = 21;
if (isFibonacciNumber(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
