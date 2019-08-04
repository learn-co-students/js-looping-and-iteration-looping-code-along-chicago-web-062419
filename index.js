// Code your solutions in this file

function writeCards(name, event) {
    let messages = []
    for (let i=0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        }
        return messages;
    }

function countdown(number) {
    let i = 0; 
    while (i <= number) {
        console.log(number--);
    }
}