function fruitprocessor(apples,oranges)
{
    const juice = `Juice with ${apples} apples and ${oranges} oranges .`
    return juice;
}

let applejuice = fruitprocessor(5,0);

console.log(applejuice);

let orangejuice = fruitprocessor(0,05);

console.log(orangejuice);

let appleorangejuice = fruitprocessor(5,05);

console.log(appleorangejuice);
