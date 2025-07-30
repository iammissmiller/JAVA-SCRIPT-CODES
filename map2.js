const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Vegetarian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));   // 'Classico Italiano'
console.log(rest.get(2));        // 'Firenze, Italy'
console.log(rest.get(3));        // 'undefined'
console.log(rest.get(true));     // 'We are open'
