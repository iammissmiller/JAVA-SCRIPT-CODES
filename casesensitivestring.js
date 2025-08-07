function checkBaggage(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
}

checkBaggage('I have a laptop, some Food and a pocket Knife'); 
// You are not allowed on board
