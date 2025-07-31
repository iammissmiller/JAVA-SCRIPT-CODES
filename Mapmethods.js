// Create a Map to store student and their marks
let examMarks = new Map();

// Add/update marks
examMarks.set('Ankit', 78);
examMarks.set('Pooja', 85);
examMarks.set('Ravi', 92);

// Check if a student's mark is recorded
console.log(examMarks.has('Pooja')); // true
console.log(examMarks.has('Neha'));  // false

// Get a student's mark
console.log(examMarks.get('Ravi')); // 92

// Update a mark
examMarks.set('Ankit', 82); // overrides previous 78

// Iterate over entries
examMarks.forEach((marks, student) => {
  console.log(`${student}: ${marks}`);
});
// Output:
// Pooja: 85
// Ravi: 92
// Ankit: 82

// Get all students
console.log([...examMarks.keys()]); // ['Pooja', 'Ravi', 'Ankit']

// Get all marks
console.log([...examMarks.values()]); // [85, 92, 82]

// Remove a student (e.g., absent)
examMarks.delete('Pooja');

// Total recorded students
console.log(examMarks.size); // 2

// After publishing results, clear everything
examMarks.clear();
console.log(examMarks.size); // 0
