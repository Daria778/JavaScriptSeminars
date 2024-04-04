const arr = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < arr.length; i++) {
    if (i === 2) {
        arr[i] = 100;
    }
    if (arr[i] === 4) arr[i] = 6;
    if (arr[i] === 5) arr[i] = 7;
}
arr.pop();
arr.pop();
console.log(arr);