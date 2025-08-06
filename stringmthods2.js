let message = "  Hello, JavaScript World!  ";

console.log("Original String:", message);

// 1. trim() – Removes spaces from both ends
let trimmed = message.trim();
console.log("After trim():", trimmed);

// 2. toUpperCase() – Converts to uppercase
let upper = trimmed.toUpperCase();
console.log("Uppercase:", upper);

// 3. toLowerCase() – Converts to lowercase
let lower = trimmed.toLowerCase();
console.log("Lowercase:", lower);

// 4. includes() – Checks if a word is present
console.log("Includes 'JavaScript'?", trimmed.includes("JavaScript")); // true

// 5. indexOf() – Finds position of a word
console.log("Index of 'World':", trimmed.indexOf("World")); // 18

// 6. slice() – Extracts part of the string
let sliced = trimmed.slice(7, 17); // from index 7 to 16
console.log("Sliced (7, 17):", sliced);

// 7. replace() – Replaces part of the string
let replaced = trimmed.replace("JavaScript", "JS");
console.log("After replace():", replaced);

// 8. split() – Converts string to array
let words = trimmed.split(" ");
console.log("Split into words:", words);

// 9. charAt() – Returns character at a given position
console.log("Character at index 0:", trimmed.charAt(0));

// 10. length – Gives string length
console.log("Length of trimmed string:", trimmed.length);
