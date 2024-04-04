const num1 = +prompt();
const num2 = +prompt();

const sum = (a, b) => {
    return a + b;
}
const dif = (a, b) => {
    if (a > b) return a - b;
    else return b - a;
}
const mult = (a, b) => {
    return a * b;
}
const div = (a, b) => {
    return a / b;
}
console.log(`sum = ${sum(num1, num2)}, dif = ${dif(num1, num2)}, mult = ${mult(num1, num2)}, div = ${div(num1, num2)}`);  