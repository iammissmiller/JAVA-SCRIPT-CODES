// Sample bank accounts
const accounts = [
  { owner: 'Jonas', movements: [200, 450, -400, 3000, -650, -130, 70, 1300] },
  { owner: 'Jessica', movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30] },
  { owner: 'Steven', movements: [200, -200, 340, -300, -20, 50, 400, -460] },
  { owner: 'Sarah', movements: [430, 1000, 700, 50, 90] },
];

// 1. Get total deposits across all accounts
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)       // gather all movements
  .filter(mov => mov > 0)              // keep only deposits
  .reduce((sum, mov) => sum + mov, 0); // sum them
console.log('Total deposits:', bankDepositSum);

// 2. Count deposits ≥ 1000 using reduce
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);
console.log('Deposits ≥ 1000:', numDeposits1000);

// 3. Use reduce to build an object with total deposits & withdrawals
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log('Totals:', { deposits, withdrawals });

// 4. Convert any string into Title Case
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase); // ensure first word is always capitalized
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a long title but not too long'));
console.log(convertTitleCase('and here is another title with an example'));
