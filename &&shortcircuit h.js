function greetUser(user) {
  user && console.log("Hello, " + user + "!");
}

greetUser("Praptee");  // Output: Hello, Praptee!
greetUser("");         // Output: (nothing)
greetUser(null);       // Output: (nothing)
