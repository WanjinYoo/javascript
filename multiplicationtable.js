const multiplicationTable = function(maxValue) {
	let str = "";
	
	for(let i = 1; i <= maxValue; i++){
		for(let j = i; j <= i*maxValue; j += i){
			str += j+ " " ;
		}
		
		str += "\n";

	}
		return str;
	
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
