const openingHours = {
  thu: {
    open: 12,
    close: 22
  },
  fri: {
    open: 11,
    close: 23
  },
  sat: {
    open: 0,
    close: 24
  }
};
const values = Object.values(openingHours);
console.log(values);
