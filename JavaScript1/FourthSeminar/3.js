const Random = (num1, num2) => {
    return Math.floor(Math.random() * (num2 - num1) + 1);
}
const array = [];
for (let i = 0; i < 5; i++) {
    array.push(Random(0, 9));
}
const sum = (array) => {
    let jum = 0;
    for (let i = 0; i < array.length; i++) {
        jum += array[i];
    }
    return jum;
}
const min = (array) => {
    let kin = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0]) kin = array[i];
    }
    return kin;
}
const newArray = (array) => {
    const newarr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3) newarr.push(array[i]);
    }
    return newarr;
}
console.log(array, min(array), sum(array), newArray(array));