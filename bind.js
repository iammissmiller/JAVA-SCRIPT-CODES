const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const book = lufthansa.book;

// Bind Lufthansa
const bookLH = book.bind(lufthansa);
bookLH(239, 'Jonas Schmedtmann');
// Jonas booked a seat on Lufthansa flight LH239
