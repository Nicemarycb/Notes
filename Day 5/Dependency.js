//DEPENDENCY INJECTION
//===============================================


// Dependency Injection (DI) is a design pattern used in software development that allows a class 
// to receive its dependencies from an external source rather than creating them internally. 
// This promotes loose coupling between classes, making the code easier to manage, test, and maintain.


// Key Concepts of Dependency Injection:

// Dependency: A dependency is any object or service that a class needs to perform its functions. 
//             For example, if a class Car needs an Engine to work, the Engine is a dependency of the Car.

// Injection: Instead of the class creating its own dependencies, they are provided to the class by an external entity. 
//            This can be done through various methods, such as constructor injection, setter injection, or interface injection.


//Benifit of Dependency Injection:
//  loose coupling
//  eaiser testing
//  improved code resuability
//  single Responsibility principle


//EXAMPLE
//======================================================



class Engine {
    start() {
        console.log("Engine started");
    }
}

class Car {
    constructor(engine) {
        this.engine = engine;
    }

    drive() {
        this.engine.start();
        console.log("Car is driving");
    }
}

// Injecting the dependency
const engine = new Engine();
const car = new Car(engine);
car.drive();
