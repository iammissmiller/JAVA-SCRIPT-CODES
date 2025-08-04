const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(
airline.indexOf('r'),
airline.lastIndexOf('r'),
airline.indexOf('Portugal'),
airline.indexOf('portugal'))

console.log(
    airline.slice(4),
airline.slice(4, 7),
airline.slice(0, airline.indexOf(' ')),
airline.slice(airline.lastIndexOf(' ') + 1),
airline.slice(-2),
airline.slice(1, -1)
)
