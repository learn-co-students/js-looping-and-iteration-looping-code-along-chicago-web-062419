// Code your solutions in this file
function countdown(num) {
  let i = 0
  while (i < num+1){
    console.log(i++)
  }
}

function writeCards (array, string) {
    var newArr = []
    for (let i=0; i<array.length; i++)  {
    newArr.push (`Thank you, ${array[i]}, for the wonderful ${string} gift!`);

    }
    return newArr;
}
