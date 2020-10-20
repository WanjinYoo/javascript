

const makeCase = function(input, case1) {
	// Put your solution here
 let result = [];
if(typeof case1 === "string"){
	result.push(case1);
}
else if(typeof case1 ==="object"){


	for(let i = 0; i < case1.length;i++){
		if(case1[i] === "camel" || case1[i] === "pascal" || case1[i] === "snake" || case1[i] === "kebab" || case1[i] === "title"){
			result.push(case1[i]);
		}
	}
	for(let i = 0; i < case1.length;i++){
		if(case1[i] === "vowel" || case1[i] === "consonant"){
			result.push(case1[i]);
		}
	}

	for(let i = 0; i < case1.length;i++){
			if(case1[i] ==="upper" || case1[i] === "lower"){
			result.push(case1[i]);
		}
	
	
	
	}

}



for(let i =0; i < result.length; i++){
	if(result[i] === "camel"){
		input = camel(input);
	}
	if(result[i] === "pascal"){
		input = pascal(input);
	}
	if(result[i] === "snake"){
		input = snake(input);
	}
	if(result[i] === "kebab"){
		input = kebab(input);
	}
	if(result[i] === "title"){
		input = title(input);
	}
	if(result[i] === "vowel"){
		input = vowel(input);
	}
	if(result[i] === "consonant"){
		input = consonant(input);
	}
	if(result[i] === "upper"){
		input = upper(input);
	}
	if(result[i] === "lower"){
		input = lower(input);
	}
}
return input;

 
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
