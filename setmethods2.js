// Students who submitted the form
let submitted = new Set();

// Students submit
submitted.add('Ankit');
submitted.add('Pooja');
submitted.add('Ravi');
submitted.add('Ankit'); // Duplicate, will be ignored

// Check if someone submitted
console.log(submitted.has('Pooja')); // true
console.log(submitted.has('Neha'));  // false

// One student cancels submission
submitted.delete('Ravi');

// Final list of students who submitted
console.log([...submitted]); // ['Ankit', 'Pooja']

// After deadline, reset everything
submitted.clear();

console.log(submitted.size); // 0
