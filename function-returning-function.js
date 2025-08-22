function outer() {
  function inner() {
    return "I am inside!";
  }
  return inner;
}

let func = outer();
console.log(func());  // Output: I am inside!
