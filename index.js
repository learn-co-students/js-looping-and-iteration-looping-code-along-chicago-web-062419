// Code your solutions in this file
function writeCards(namesArray, event){
    let thanks = [];
    for(let i = 0; i < namesArray.length; i++) {
        thanks.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return thanks
}

function countdown(integer){
    while (integer > 0){
        console.log(integer);
        integer -= 1;
    }
    console.log(integer);
}