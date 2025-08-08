// Sample data
const rawName = '  jOhN  ';
const rawEmail = '  Test@Example.COM  ';
const priceGB = '288,97£';
const announcement = 'All passengers come to boarding door 23. Boarding door 23.';
const plane = 'Airbus A320neo';
const baggageItems = 'I have a Laptop, some Food and a Pocket Knife';

// 1. Fix capitalization
const nameFixed = rawName.trim().toLowerCase();
const nameProper = nameFixed[0].toUpperCase() + nameFixed.slice(1);
console.log(nameProper); // John

// 2. Normalize email
const emailNormalized = rawEmail.toLowerCase().trim();
console.log(emailNormalized); // test@example.com

// 3. Replace text
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // 288.97$

console.log(announcement.replaceAll('door', 'gate'));

// 4. Checking substrings
console.log(plane.includes('A320'));     // true
console.log(plane.startsWith('Airbus')); // true
console.log(plane.endsWith('neo'));      // true

// 5. Security check
const baggage = baggageItems.toLowerCase();
if (baggage.includes('knife') || baggage.includes('gun')) {
  console.log('You are not allowed on board');
} else {
  console.log('Welcome aboard');
}
