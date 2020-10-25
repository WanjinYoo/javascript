let prompt = require("prompt-sync")();

// code below (replace this example)
let attempts = 0;
let rand = Math.floor(Math.random() * 100) + 1;
let answer;
let guessednum = [];
console.log(rand);
while(answer !== rand){
answer = prompt("Guess a number: ");
answer = parseInt(answer);
if(Number.isNaN(answer) === true){
  console.log("Not a number! Try again!");
  attempts--;
}
else if(guessednum.includes(answer)){
  console.log("Already Guessed!");
  attempts--;
}
else if(answer > rand){
  console.log("Too High!");
  guessednum += answer;
}
else if(answer < rand){
  console.log("Too low!");
  guessednum += answer;
}
else{
  console.log("You got it! You took "+attempts+" attempts!");
}

attempts++;
}
