const Random = (num1, num2) => {
    return Math.floor(Math.random() * (num2 - num1) + 1);
}
const array = [];
for (let i = 0; i < 5; i++) {
    array.push(Random(0, 9));
}
const Sum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const Min = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0]) min = array[i];
    }
    return min;
}
const NewArray = (array) => {
    const newarr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3) newarr.push(array[i]);
    }
    return newarr;
}
console.log(array, Min(array), Sum(array), NewArray(array));