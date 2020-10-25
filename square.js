const squareCode = function(message) {
  // Put your solution here
  let count = 0;
  let msg = "";
  for(let i = 0; i < message.length; i++){
     if(message[i] !== " "){
       count++;
       msg += message[i];
     }
  }
  
  
  let s = "";
  let sqrt = Math.ceil(Math.sqrt(count));
  let col = Math.ceil(count/sqrt);
  let track = 0;
  let twod = [];
  for(let i =0; i < sqrt; i++){
    twod[i] = [];
  }
  for (let i = 0; i < col; i++){
    for (let j = 0; j < sqrt; j ++){
      if(track === msg.length){
        break;
      }
      twod[j][i] = msg[track];
      track++;
    }


    if(track === msg.length){
      break;
    }
  }
  
    for(let i =0; i < twod.length; i++){
      for(let j = 0; j < twod[i].length; j++){
          s += twod[i][j];
      }
      s += " ";
    }
  return s;
  

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));