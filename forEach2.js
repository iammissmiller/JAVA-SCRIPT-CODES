const students = [
  { name: "Aarav", marks: 85 },
  { name: "Praptee", marks: 92 },
  { name: "Rohan", marks: 76 },
  { name: "Meera", marks: 64 }
];

students.forEach((student, index) => {
  console.log(
    `${index + 1}. ${student.name} scored ${student.marks} marks`
  );
});
