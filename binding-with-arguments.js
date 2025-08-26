const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// Extract book method
const book = lufthansa.book;

// Bind Lufthansa
const bookLH = book.bind(lufthansa);
bookLH(239, 'Jonas Schmedtmann');
// Jonas booked a seat on Lufthansa flight LH239


// Another airline
const eurowings = { airline: 'Eurowings', iataCode: 'EW', bookings: [] };

// Bind airline + flight number
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Steven Williams'); // Steven booked a seat on Eurowings flight EW23
bookEW23('Martha Cooper');   // Martha booked a seat on Eurowings flight EW23
