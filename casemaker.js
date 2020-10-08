

const makeCase = function(input, case1) {
  // Put your solution here
 if(case1 === "camel"){
 	return camel(input);
 }
}

const camel = function(input){
	let str = "";
	for(let i = 0; i < input.length; i++){
		if(input[i] === " "){
			str += input[i+1].toUpperCase();
			i++;
		}
		else {
			str += input[i];
		}
	}
	return str;
}
const pascal = function(input){
	let str = "";
	str += input[0].toUpperCase();
	for(let i = 1; i < input.length; i++){
		if(input[i] === " "){
			str += input[i+1].toUpperCase();
			i++;
		}
		else {
			str += input[i];
		}
	}
	return str;
}
const snake = function(input){
	let str = "";
	
	for(let i = 0; i < input.length; i++){
		if(input[i] === " "){
			str += "_";
		}
		else {
			str += input[i];
		}
	}
	return str;
}
const kebab = function(input){
	let str = "";
	
	for(let i = 0; i < input.length; i++){
		if(input[i] === " "){
			str += "-";
		}
		else {
			str += input[i];
		}
	}
	return str;
}

const title = function(input){
	let str = "";
	str += input[0].toUpperCase();
	for(let i = 1; i < input.length; i++){
		if(input[i] === " "){
			str += " " + input[i+1].toUpperCase();
			i++;
		}
		else {
			str += input[i];
		}
	}
	return str;
}

const vowel = function(input){
	let str = "";
	for(let i = 0; i < input.length; i++){
		if(input[i] === "a" || input[i] === "e" || input[i] === "o" || input[i] === "i" || input[i] === "u"){
			str += input[i].toUpperCase();
		}
		else{
			str += input[i];
		}
	}

	return str;
}

 const consonant = function(input){
	let str = "";
	for(let i = 0; i < input.length; i++){
		if(input[i] === "a" || input[i] === "e" || input[i] === "o" || input[i] === "i" || input[i] === "u"){
			str += input[i];
		}
		else{
			str += input[i].toUpperCase();
		}
	}

	return str;
}

 const upper = function(input){
	let str = "";
	
	for(let i = 0; i < input.length; i++){
		if(input[i] === " "){
			str += "_";
		}
		else {
			str += input[i];
		}
	}
	return str.toUpperCase();
}
const lower = function(input){
	let str = "";
	
	for(let i = 0; i < input.length; i++){
		if(input[i] === " "){
			str += "_";
		}
		else {
			str += input[i];
		}
	}
	return str;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
