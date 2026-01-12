function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Invalid operator';
    }
}

const result1 = calculate.apply(null, [10, 5, '-']);
const result2 = calculate.apply(null, [10, 5, '+']);
const result3 = calculate.apply(null, [10, 5, '*']);
const result4 = calculate.apply(null, [10, 5, '/']);
const resultError = calculate.apply(null, [10, 5, '%']);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(resultError);
