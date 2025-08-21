function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeterHey = greet('Hey'); 
greeterHey('Jonas');   // Hey Jonas
greeterHey('Steven');  // Hey Steven

// Direct call in one go
greet('Hello')('Alice'); // Hello Alice
