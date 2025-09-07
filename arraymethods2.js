// Dummy array
const arr = [23, 11, 64];

// ---- Traditional indexing vs at() ----
console.log(arr[0]);     // 23 (first element - traditional)
console.log(arr.at(0));  // 23 (first element - at())

// Last element
console.log(arr[arr.length - 1]); // 64 (traditional)
console.log(arr.at(-1));          // 64 (with at())

// Second last element
console.log(arr.at(-2)); // 11


// ---- Slice vs at() ----
console.log(arr.slice(-1)[0]); // 64 (last element via slice)
console.log(arr.at(-1));       // 64 (simpler with at())


// ---- Method chaining example ----
const nums = [10, 20, 30, 40, 50];
console.log(nums.filter(n => n > 20).at(-1)); 
// 50 (last element of filtered array)


// ---- Strings with at() ----
const str = "jonas";
console.log(str.at(0));   // "j" (first char)
console.log(str.at(-1));  // "s" (last char)
console.log(str.at(-2));  // "a" (second last char)
