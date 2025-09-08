const movements = [120,130,140,150,160];

movements.forEach(function(movement){
    if(movement > 0){
        console.log(`you deposited ${movement}`);
    }
    else{
        console.log(`you withdraw ${movement}`);
    }
})
