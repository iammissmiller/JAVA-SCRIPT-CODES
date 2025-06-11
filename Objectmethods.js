const calculator = {
  // Method to add two numbers
  add: function(a, b) {
    return a + b;
  },

  // Method to subtract two numbers
  subtract: function(a, b) {
    return a - b;
  },

  // Method to multiply two numbers
  multiply: function(a, b) {
    return a * b;
  },

  // Method using shorthand syntax (ES6+)
  divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero!";
    }
    return a / b;
  }
};

// Using the object methods
console.log(calculator.add(5, 3));        // Output: 8
console.log(calculator.subtract(10, 4));  // Output: 6
console.log(calculator.multiply(6, 7));   // Output: 42
console.log(calculator.divide(20, 5));    // Output: 4
console.log(calculator.divide(10, 0));    // Output: Cannot divide by zero!
