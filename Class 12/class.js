// Object

// using literals

// const obj1 = { name: 'Chirag'};

// const obj2 = Object.create(obj1);

// console.log(obj1, obj2);
// console.log(obj1.name, obj2.name);

// Contructor

// function Person(name, company) {
//     this.name = name;
//     this.company = company;
// }

// const Personbj1 = new Person('Protik', 'XYZ');
// const Personbj2 = new Person('Abdul', 'XYZ');
// console.log(Personbj1, Personbj2);


// Class

// Abstraction
// Encapsulation

// class Person{
//     constructor(firstName, lastName, company) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.company = company;
//         this.printDetail = function() { 
//             console.log(`Name: ${this.firstName}, Company: ${this.company}`);
//         }
//     }

//     getName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const Personbj2 = new Person('Chirag', 'Goel', 'XYZ');
// console.log(Personbj2.getName());


// Inheritance

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.printDetail = function() { 
            return (`Name: ${this.firstName}, Company: ${this.company}`);
        }
    }
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }

    sum(a,b) {
        return a + b;
    }
}

class Student extends Person{
    constructor(firstName, lastName, rollNo, course) {
        super(firstName, lastName);
        this.rollNo = rollNo;
        this.course = course;
    }

    sum(a,b,c=0) {
        console.log('Child')
        return a + b + c;
    }
}

const Vasanth = new Student('Vasanth', 'Kumar', 1, 'Web Development');
console.log(Vasanth.printDetail());
console.log(Vasanth.getName());
console.log(Vasanth.sum(1,2));


// class Vehicle{
// }

// class TwoVehicle{
// }

// class FourVehicle {
// }

// const scooty = new TwoVehicle();

// const KiaCar = new FourVehicle();







