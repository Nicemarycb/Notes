//CLASS CONCEPT
//-----------------------------------

// In object oriented programming, A clss is a blue print or template for creating an object
// it defines the structure and behaviour of the object created from it
// it also defines the properties and methods that the object will have


//  class consists of:
//  1) properties: variables that holds value
//  2) methods: functions inside a class is called methods
//  3) constructor: to initailize values to properties;


// creation of a class
// ------------------------------------
// - class name start with Capital letter

// eg: class Employee {
//     properties
//     constructor
//     methods
// }

// - properties, constructor and methods are optional
// - if we want to access any properties or methods inside that class, use this keyword before property name and method name

//  eg: this.empName
//  this.sayHello() 
//  -this means: that particular class (refer to that specific class);



class Student{
    sName;
    sRollno;
    sLocation
    sclass;
    sMark;
    constructor(Name,Rollno,Location,className,Mark){

        this.sName=Name;
        this.sRollno=Rollno;
        this.sLocation=Location;
        this.sclass=className;
        this.sMark=Mark;
    }
    printstudentDetails(){
        console.log("Student Details:");
        console.log(`Name is ${this.sName},Roll No is ${this.sRollno} and coming from ${this.sLocation}`);
    }
    printMark(){
        console.log("Student Mark:");
        console.log(`Name: ${this.sName}, class: ${ this.sclass},Mark:${this.sMark}`);
    }


}
const s1=new Student('Alan',101,'Kochi','10th',467);
s1.printstudentDetails();
s1.printMark();
const s2=new Student('Jhon',102,'Kakanad','9th',387);
s1.printstudentDetails();
