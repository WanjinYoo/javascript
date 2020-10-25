const generateBoard = function(a,b){

 let array = [];
 for(let i = 0; i < 8; i ++){
   array[i] = [];
  for(let j = 0; j <8 ; j++){
    if(i === a[0] && j === a[1]){
      array[i][j] = 1;
    }
  else if(i === b[0] && j === b[1]){
    array[i][j] = 1;
  }
  else{
    array[i][j] = 0;
  }
  }
 }
 return array;
}
const queenThreat = function(board){
  let array = [];
 for(let i = 0; i < board.length;i++){
   for(let j = 0; j < board[i].length; j++){
      if(board[i][j] === 1){
        array.push([i,j]);
      }
   }
 }
 console.log(array);
 if(array[0][0] === array[1][0]){   // row
   return true;
 }
 else if(array[0][1] === array[1][1]){ // col
   return true;
 }
 else if(array[0][0] === array[0][1] && array[1][0] === array[1][1]){ 
   return true;
 }
 else if(array[0][1] === array[1][0] && array[1][1] === array[0][0]){
   return true;
 }
 else{
   return false;
 }
}




let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));


whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));