let prices = new Map();

prices.set("apple", 30);
prices.set("banana", 10);
prices.set("orange", 20);

// Get the price of banana
console.log(prices.get("banana")); // Output: 10

// Loop through the Map
for (let [fruit, price] of prices) {
  console.log(`${fruit} costs ₹${price}`);
}
