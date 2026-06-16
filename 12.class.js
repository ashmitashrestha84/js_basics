//! class
//blueprint of object and initialize it.
//helps to reuse the code
//creating object of that class is instance.

class User{
    // name;  //* public property shouldnot be declared
    // email;
    #password;  //* private property should be declared
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.#password=password;
    }
    getPassword(){
        return this.#password;
    }
    getname(){
        return this.name;
    }
    introduce(){
        console.log('This is user class')
    }
}
let user1=new User('John','john@gmail.com',1234); //user1 is object here
console.log(user1)
console.log(user1.name);
console.log(user1['email']);
// console.log(user1.#password);  cannt access
console.log(user1.getPassword());
console.log(user1.getname());
user1.introduce();


//! student(name,email,password,faculty,rollno,year)

//* Inheritance
//? super
//? extend
// class Student extends User{
//     faculty;
//     rollno;
//     year;
//     constructor(name,email,password,faculty,rollno,year){
//         super(name,email,password); //calls constructor of parent class
//         this.faculty=faculty;
//         this.rollno=rollno;
//         this.year=year;
//     }
//     get rollno(){
//         return this.rollno;
//     }
// }
// let student1=new Student('Ashmita','ashmita@gmail.com',1234,'BSc.CSIT',33,'second');
// console.log(student1);
// console.log(student1.getPassword());
// console.log(student1.getname());
// console.log(student1.rollno);

//! Polymorphism
// a function that behave differently in different class

// class Student extends User{
//     faculty;
//     rollno;
//     year;
//     #password;
//     constructor(name,email,password,faculty,rollno,year){
//         super(name,email,password); //calls constructor of parent class
//         this.faculty=faculty;
//         this.rollno=rollno;
//         this.year=year;
//     }
//     get rollno(){
//         return this.rollno;
//     }
//     introduce(){    //polymorphism
//         console.log('this is student class');
//     }
// }
// let student1=new Student('Ashmita','ashmita@gmail.com',1234,'BSc.CSIT',33,'second');
// console.log(student1);
// console.log(student1.getPassword());
// console.log(student1.getname());
// console.log(student1.rollno);
// student1.introduce();


//!Abstraction
//the process of hiding unnecessary implementation details and showing only the essential features to the user.

class Makecoffee{
    start(){ //Abstraction
        console.log('start');
        this.#grinding();
        this.#heatingwater();
        this.#processing();
    }
    #grinding(){
        console.log('grinding');
    }
    #heatingwater(){
        console.log('heating water');
    }
    #processing(){
        console.log('processing');
    }
}
const cm= new Makecoffee();
cm.start();
// cm.grinding();
// cm.heatingwater();
// cm.processing();

//todo:static method,getter,setter
//in setter single argument should be taken
class Person {
    constructor(age) {
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            console.log("Age cannot be negative");
            return;
        }
        this._age = value;
    }
}

const p1 = new Person(20);
p1.age = -10;
console.log(p1.age);

//!static method
//belongs to the class itself, not to objects created from the class.

class operation {
    static add(a, b) {
        return a + b;
    }
}

console.log(operation.add(5, 3));