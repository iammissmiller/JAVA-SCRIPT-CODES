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

const properties = Object.keys(openingHours);

for (const day of properties) {
  console.log(day);
}
console.log(`We are open on ${properties.length} days.`);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
