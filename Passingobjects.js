// Example 1: Passing a primitive (string)
let flight = 'LH234';

function changeFlight(flightNum) {
  flightNum = 'LH999'; // only changes local copy
  console.log('Inside function:', flightNum);
}

changeFlight(flight);
console.log('Outside function:', flight); 
// Output: LH234 (unchanged)


// Example 2: Passing an object
const passenger = {
  name: 'Jonas',
  passport: 12345,
};

function changeName(person) {
  person.name = 'Mr ' + person.name; // modifies the original object
  console.log('Inside function:', person.name);
}

changeName(passenger);
console.log('Outside function:', passenger.name); 
// Output: Mr Jonas (changed)
