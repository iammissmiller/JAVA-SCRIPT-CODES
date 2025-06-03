const person = {
  name: "Praptee",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Output: Hello, Praptee
