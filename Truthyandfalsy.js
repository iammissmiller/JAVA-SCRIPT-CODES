// List of falsy values in JavaScript
let falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

// Check falsy values
console.log("Falsy Values:");
falsyValues.forEach(value => {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
});

// Examples of truthy values
let truthyValues = [true, 1, -1, "hello", [], {}, function() {}, Infinity];

// Check truthy values
console.log("\nTruthy Values:");
truthyValues.forEach(value => {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
});
