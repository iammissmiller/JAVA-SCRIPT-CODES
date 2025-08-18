// Store function in a variable
const sayHello = function () {
  console.log("Hello!");
};

// Pass function as an object property
const greeter = {
  greet: sayHello
};

sayHello();         // Hello!
greeter.greet();    // Hello!
