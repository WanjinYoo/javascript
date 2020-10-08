let numberOfVowels = function(data) {
  // Put your solution here
  let count = 0;
  for(let i = 0; i < data.length; i++){
  	if(data[i] === "a" || data[i] === "e" || data[i] === "o" || data[i] === "u" || data[i] === "i"){
  		 count++;
  	}
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));