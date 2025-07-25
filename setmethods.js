const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

console.log('Intersection:', a.intersection(b));       // Set { 3, 4 }
console.log('Union:', a.union(b));                     // Set { 1, 2, 3, 4, 5, 6 }
console.log('Difference (a - b):', a.difference(b));   // Set { 1, 2 }
console.log('Symmetric Difference:', a.symmetricDifference(b)); // Set { 1, 2, 5, 6 }
console.log('Is Disjoint:', a.isDisjointFrom(b));      // false
