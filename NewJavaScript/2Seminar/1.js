class Book {
    title = "Master & Margarita";
    author = "Bulgakov";
    pages = 902;

    displayinfo() {
        console.log("Title:", this.title, "\n", "Author:", this.author, "\n", "Number of pages:", this.pages);
    }

}
const book = new Book();
book.displayinfo();

class Student {
    name;
    age;
    grade;

    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayinfoSt() {
        console.log("Name:", this.name, "\n", "Age:", this.age, "\n", "Grade:", this.grade);
    }
}
const student = new Student("Jhon", 52, 2);
student.displayinfoSt();