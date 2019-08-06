// Code your solutions in this file

// const names = ["Ada", "Brendan", "Ali"]

function writeCards(names, ele) {
    let arr = []
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${ele} gift!`);
    }
    return arr
}
// console.log(writeCards(names, "birthday"));

function countdown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}
// countdown(10)