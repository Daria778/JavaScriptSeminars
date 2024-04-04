const user = prompt('Enter a number');
if (!isNaN(user)) {
    let persent = (num) => {
        return num - (num * 13 / 100);
    }
    console.log(`Размер заработной платы за вычетом налогов равен ${persent(user)}`);
} else {
    console.log("Значение задано неверно");
}