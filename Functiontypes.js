// 1. Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!

// 2. Function Expression
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

// 3. Arrow Function
const multiply = (x, y) => x * y;

console.log(multiply(4, 6)); // Output: 24
