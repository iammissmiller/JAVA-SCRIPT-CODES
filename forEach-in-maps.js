const studentMarks = new Map([
  ["Aarav", 85],
  ["Praptee", 92],
  ["Rohan", 76],
  ["Meera", 64]
]);

studentMarks.forEach((value, key) => {
  console.log(`${key} scored ${value} marks`);
});
