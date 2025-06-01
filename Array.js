// Create an array
let colors = ["red", "blue", "green"];

// Show the whole array
console.log(colors);

// Show one item
console.log(colors[0]); // red

// Add a new color
colors.push("yellow");
console.log(colors); // ["red", "blue", "green", "yellow"]

// Change a color
colors[1] = "purple";
console.log(colors); // ["red", "purple", "green", "yellow"]

// Remove last color
colors.pop();
console.log(colors); // ["red", "purple", "green"]

// Count how many colors
console.log(colors.length); // 3
