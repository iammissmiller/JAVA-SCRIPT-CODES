// Coding Challenge #1

// Test Data 1
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log("Mark's BMI:", bmiMark.toFixed(1));
console.log("John's BMI:", bmiJohn.toFixed(1));
console.log("Is Mark's BMI higher than John's?", markHigherBMI);

// Coding Challenge #2

if (markHigherBMI) {
  console.log(`Mark's BMI (${bmiMark.toFixed(1)}) is higher than John's (${bmiJohn.toFixed(1)})!`);
} else {
  console.log(`John's BMI (${bmiJohn.toFixed(1)}) is higher than Mark's (${bmiMark.toFixed(1)})!`);
}
