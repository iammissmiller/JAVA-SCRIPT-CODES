const nested = [2, 4, [5, 6]];

// Destructure into element + inner array
const [i, , j] = nested;
console.log(i, j); // 2 [5, 6]

// Destructure into individual values
const [k, , [l, m]] = nested;
console.log(k, l, m); // 2 5 6
