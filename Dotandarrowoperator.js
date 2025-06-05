const student = {
  name: "Praptee",
  marks: [90, 85, 88],
  average: function () {
    // Using arrow function inside method
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }
};

console.log(student.name);       // Dot operator: Output: Praptee
console.log(student.average());  // Arrow inside method: Output: 87.666...
