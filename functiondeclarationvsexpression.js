// function declaration 

function calcage1(birthyear)
{

return 2037 - birthyear ;

};

const age1 = calcage1(2006);


// function expression

const calcage2 = function(birthyear)
{

return 2037 - birthyear ;

};

const age2 = calcage2(2006);

console.log(age1 , age2);



