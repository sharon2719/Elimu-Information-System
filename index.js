//Create a parent class Person
class Person{
    constructor(name,age,gender,interest,greeting){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.interest=interest;
        this.greeting=greeting;
        this.bio=function (){
            return`${this.name} is ${this.age} years old.He loves ${this.interest}.${this.greeting} ${this.name}.`;
        }
        }

    }
//create an object instance of class Person
let person2=new Person("John Doe",23,"Male","Swimming","Hi there,I am");
console.log(person2.name);
console.log(person2.age);
console.log(person2.gender);
console.log(person2.interest);
console.log(person2.bio());

//Class Teacher to inherit from the parent class Person 
class Teacher extends Person{
    constructor(name,age,gender,interest,subject,greeting){
        super(name,age,gender,interest,greeting);
        this.subject=subject;
        this.teachers=function(){
            return`${this.name} is ${this.age} years old.He loves to ${this.interest}.He teaches ${this.subject}.${this.greeting} ${this.name}.`;
        }
        
    }
}
//Object instance of class Teacher
let teacher=new Teacher("Peter Smith",45,"Male","Hiking","Physics","Hello I am");
console.log(teacher.name);
console.log(teacher.age);
console.log(teacher.gender);
console.log(teacher.interest);
console.log(teacher.subject);
console.log(teacher.teachers());

//inherit from parent class Person
class Student extends Person{
    constructor(name,age,gender,interest,greeting){
        super(name,age,gender,interest,greeting);
        this.student=function(){
            return `${this.name} is ${this.age} years old.They love ${this.interest}.${this.greeting} ${this.name}.`
        }
    }
}
//Object instance of class student
let student1=new Student("Jane Nod",21,"Female","Kickboxing","Yo! I am ");
console.log(student1.name);
console.log(student1.age);
console.log(student1.gender);
console.log(student1.interest);
console.log(student1.student());

//This class allows development of different objects with shared attributes.
 