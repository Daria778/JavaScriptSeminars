class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log("name:", this.name);
    }
}
class Manager extends Employee {
    department;

    constructor(department, name) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(this.name, this.department);
    }
}
const emp = new Employee('k');
emp.displayInfo();
const man = new Manager("sales", 'l');
man.displayInfo();


class Order {
    orderNumber;
    products = [];
    constructor(orderNumber) {
        this.orderNumber = orderNumber;

    }
    addProduct(product) {
        this.products.push(product);
    }
    getTotalPrice() {
        let count = 0;
        this.products.forEach(e => {
            count += e.price;
        });
        console.log(count);
    }


}
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

}
const pr = new Product('poj', 12);
const ty = new Product('ert', 48);
const vb = new Order(34567);
vb.addProduct(pr);
vb.addProduct(ty);
vb.getTotalPrice();

