function createBooking(flightNum, numPassengers = 1, price = numPassengers * 200) {
  const booking = { flightNum, numPassengers, price };
  console.log(booking);
}

// Using all defaults
createBooking('LH123');
// { flightNum: 'LH123', numPassengers: 1, price: 200 }

// Overriding defaults
createBooking('LH124', 3, 600);
// { flightNum: 'LH124', numPassengers: 3, price: 600 }

// Skipping numPassengers but setting price
createBooking('LH125', undefined, 1000);
// { flightNum: 'LH125', numPassengers: 1, price: 1000 }
