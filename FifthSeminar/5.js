const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
];

const products = {};
for (let i = 0; i < 7; i++) {
    products[en[i]] = ru[i];
}
console.log(products);