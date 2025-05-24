const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense);
if (hasDriversLicense && hasGoodVision) {
console.log('Sarah is able to drive!');
} else {
console.log('Someone else should drive...');
}
const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);
