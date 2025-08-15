function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
}

function checkIn(flightNum, passenger) {
  if (passenger.passport === 12345) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport');
  }
}

const jonas = { name: 'Jonas', passport: 12345 };
newPassport(jonas);
checkIn('LH234', jonas); // "Wrong passport"
