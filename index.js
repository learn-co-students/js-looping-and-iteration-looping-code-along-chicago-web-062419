// Code your solutions in this file
//! for ([initialization]; [condition]; [iteration]) {
//!     [loop body]
//!   }
// returns an array of thank you messages for each name provided to the function:
function writeCards(namesArray, adjective) {
    let cards = []
    // assign empty array to cards so we can add messages later
    for(let i = 0; i < namesArray.length; i++) {
    let message = `Thank you, ${namesArray[i]}, for the wonderful ${adjective} gift!`;
    cards.push(message)
    }
    return cards;
}

//  invokes console.log once for each number, 
// counting down from the number provided to zero:
function countdown(number) {
    for(let i = 0; i <= number; i++) {
        console.log(number - i)
    }
}
