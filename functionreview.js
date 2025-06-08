// function declaration 
// Can be called before declared 

function calcage1(birthyear)
{

return 2037 - birthyear ;

};

const age1 = calcage1(2006);


// function expression
// Essentially a function valur=e stored in a variable

const calcage2 = function(birthyear)
{

return 2037 - birthyear ;

};

const age2 = calcage2(2006);

// Arrow Function

const calcage3 = birthyear => 2037 - birthyear ;

const age3 = calcage3(2006);

console.log(age1 , age2 , age3);



