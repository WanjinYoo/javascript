let camelCase = function(input) {
	let str = "";
	for(let i = 0; i < input.length; i++){

		if(input[i] === " "){
			str += input[i+1].toUpperCase();
			i++;
		}
		else{
			str += input[i];
		}
	}
	return str;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));