// Base class (Parent)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method (Encapsulation)
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

// Derived class (Child) - Inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // calling the parent constructor
    this.grade = grade;
  }

  // Method Overriding (Polymorphism)
  introduce() {
    console.log(`Hi, I'm ${this.name}, a student in grade ${this.grade}.`);
  }

  study(subject) {
    console.log(`${this.name} is studying ${subject}.`);
  }
}

// Another subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
}

// Creating objects
const student1 = new Student("Miller", 20, "B.Tech 2nd Year");
const teacher1 = new Teacher("Dr. Sharma", 45, "Computer Science");

// Using methods
student1.introduce();    // Polymorphism example
student1.study("OOPs");

teacher1.introduce();
teacher1.teach();
