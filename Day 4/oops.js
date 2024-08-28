// OBJECT ORIENTED CONCEPT
// ======================================


// Object-Oriented Programming (OOP) in JavaScript revolves around creating objects that represent real-world entities 
// and structuring code in a way that models these entities and their behaviors. 
// The core concepts of OOP in JavaScript include Encapsulation, Inheritance, Polymorphism, and Abstraction.

// INHERITANCE
//=========================================

// Inheritance is the mechanism by which one class (child or subclass) can inherit properties and methods from another class (parent or superclass).
// This allows for code reuse and the creation of a hierarchical relationship between classes.


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog('Max', 'Golden Retriever');
myDog.speak(); 



//POLYMORPHISM
//==================================================

// Polymorphism means "many forms" and it allows methods to do different things based on the object it is acting upon, 
// even if they share the same name. In JavaScript, polymorphism is typically achieved through method overriding and method overloading.
// Method overloading - JavaScript does not support method overloading natively, 
// but you can achieve similar behavior using default parameters or by checking the type/number of arguments.
// Method overriding - A subclass can provide a specific implementation of a method that is already defined in its superclass.


class Birds {
    speak() {
        console.log('Birds speaks.');
    }
}

class Crow extends Birds {
    speak() {
        console.log('Crow Sounds.');
    }
}

const myBirds = new Birds();
const myCrow = new Crow();

myBirds.speak(); 
myCrow.speak(); 


//ABSTRACTION
//======================================================
// Abstarction is one of the fundemental concept of object oriented programming , That refers to the practice of
// hiding the implementation details of an object and exposing only the essential feature to the user.
// it is achived by using access modifiers

class CoffeeMachine {
    #waterAmount = 0; // private field

    setWaterAmount(amount) {
        if (amount < 0) {
            throw new Error("Water amount must be positive.");
        }
        this.#waterAmount = amount;
    }

    #boilWater() { // private method
        console.log("Boiling water...");
    }

    makeCoffee() {
        this.#boilWater();
        console.log("Making coffee...");
    }
}

const myMachine = new CoffeeMachine();
myMachine.setWaterAmount(100);
myMachine.makeCoffee(); // Boiling water... Making coffee...

//ENCAPSULATION
//=======================================================
// Encapsulation is the process of binding properties and methods into a single unit


class Car {
    #engineStatus = 'off'; // private field

    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    startEngine() {
        this.#engineStatus = 'on';
        console.log(`${this.brand} ${this.model}'s engine is now ${this.#engineStatus}.`);
    }

    getEngineStatus() {
        return this.#engineStatus;
    }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.startEngine(); // Toyota Corolla's engine is now on.
console.log(myCar.getEngineStatus()); // on

