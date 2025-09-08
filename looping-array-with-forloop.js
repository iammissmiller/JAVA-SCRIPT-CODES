const movements = [120,130,140,150,160];

for (const movement of movements){
    
    if(movement > 0){
    console.log(`you deposited ${movement}`);
    }

else {
    console.log(`you withdrew ${Maths.abs(movement)}`);
}

}
