function processUserInput(callback) {
  const name = "Alice";
  callback(name); // Call the function passed in
}

// Pass a function into another function
processUserInput(function (user) {
  console.log("Welcome, " + user);
});

// Output: Welcome, Alice
