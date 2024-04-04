const number1 = +prompt('enter a number');
const number2 = +prompt('enter a number');
const number3 = +prompt('enter a number');

const Max = (num1, num2, num3) => {
    let max = num1;
    if (num2 > num1) max = num2;
    else if (num3 > num1 & num3 > num2) max = num3;
    return max;
}
console.log(Max(number1, number2, number3));