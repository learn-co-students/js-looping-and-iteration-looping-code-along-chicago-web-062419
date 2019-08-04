// Code your solutions in this file


function writeCards(array, event) {
  let thankYous = [];
  for (let i = 0; i < array.length; i++) {
    thankYous.push(`Thanks ${array}! for ${event} gift!`);
  }
  return thankYous;
}

function countdown(integer) {
  while (integer > 0) {
    console.log(integer);
    integer -= 1;
  }
  console.log(integer);
  
}
