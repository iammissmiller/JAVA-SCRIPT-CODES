// Define an object representing a person
const person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "traveling", "coding"],
  
  // Method (a function inside an object)
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

// Accessing object properties
console.log(person.name);        // Output: Alice
console.log(person.age);         // Output: 30
console.log(person.hobbies[1]);  // Output: traveling

// Calling a method
person.greet();                  // Output: Hello, my name is Alice

// Updating a property
person.age = 31;

// Adding a new property
person.country = "India";

console.log(person);
