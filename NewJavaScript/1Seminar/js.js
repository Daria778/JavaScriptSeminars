// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
//найти минимальное число в массиве, решение задание должно состоять из одной строки
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. 
//Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);
const arr = [1, 5, 7, 9, 0];
console.log(Math.min(...arr));

const CreateCounter = () => {
    let count = 0;
    return {
        increment: count + 1,
        decrement: count - 1
    }
}
console.log(CreateCounter());

const findElementByClass = (root, Elclass) => {
    if (root.classList.contains(Elclass)) return root;
    for (let i = 0; i < root.children.length; i++) {
        el = findElementByClass(root.children[i], Elclass);
        if (el) {
            return el;
        }
    }
    return 0;
}

const root = document.querySelector('body');
console.log(findElementByClass(root, 'lol')); 