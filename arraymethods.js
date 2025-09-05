// ====== SLICE (does NOT mutate) ======
const arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr1.slice(2));       // ['c', 'd', 'e']
console.log(arr1.slice(1, 4));    // ['b', 'c', 'd']
console.log(arr1.slice(-2));      // ['d', 'e']
console.log(arr1.slice(-1));      // ['e'] (last element)
console.log(arr1.slice());        // ['a','b','c','d','e'] shallow copy
console.log("Original:", arr1);   // still intact


// ====== SPLICE (MUTATES original) ======
const arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.splice(2));      // ['c','d','e'] removed
console.log("After splice:", arr2); // ['a','b']

const arr3 = ['a', 'b', 'c', 'd', 'e'];
arr3.splice(1, 2); // remove 2 elems starting at index 1
console.log(arr3); // ['a','d','e']


// ====== REVERSE (MUTATES original) ======
const arr4 = ['a', 'b', 'c'];
arr4.reverse();
console.log(arr4); // ['c','b','a']


// ====== CONCAT (does NOT mutate) ======
const arr5 = ['a', 'b', 'c'];
const arr6 = ['d', 'e', 'f'];
console.log(arr5.concat(arr6));     // ['a','b','c','d','e','f']
// Alternative:
console.log([...arr5, ...arr6]);    // ['a','b','c','d','e','f']


// ====== JOIN (does NOT mutate) ======
const arr7 = ['a', 'b', 'c', 'd'];
console.log(arr7.join('-'));  // "a-b-c-d"
console.log(arr7.join(''));   // "abcd"
console.log(arr7.join(' '));  // "a b c d"
