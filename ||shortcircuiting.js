function greet(name) {
  const finalName = name || 'Guest';
  console.log(`Hello, ${finalName}!`);
}

greet('Praptee');  // Output: Hello, Praptee!
greet();           // Output: Hello, Guest!
