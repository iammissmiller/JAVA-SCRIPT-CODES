const needToBuy = new Set(['milk', 'eggs', 'bread', 'butter']);
const alreadyHave = new Set(['bread', 'butter', 'juice']);

// Items you still need to buy
const stillNeed = needToBuy.difference(alreadyHave);
console.log('Still need to buy:', [...stillNeed]); // ['milk', 'eggs']

// Items you already have from your list
const alreadyInList = needToBuy.intersection(alreadyHave);
console.log('Already have from list:', [...alreadyInList]); // ['bread', 'butter']

// Is your list already complete?
const isComplete = needToBuy.isSubsetOf(alreadyHave);
console.log('Shopping complete?', isComplete); // false
