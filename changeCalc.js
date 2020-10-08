let calculateChange = function(total, cash) {
	let changeType = {
		twentyDollar :0,
		tenDollar : 0,
		fiveDollar : 0,
		twoDollar : 0,
		oneDollar : 0,
		quarter : 0,
		dime : 0,
		nickel : 0,
		penny : 0
	};
let change = cash - total;
let temp = 0;
while (change > 0){
	if(change > 2000){
		temp  = Math.floor(change/2000);
		changeType["twentyDollar"] += temp;
		change = change % 2000;

	}
	else if (change > 1000){
		temp  = Math.floor(change/1000);
		changeType["tenDollar"] += temp;
		change = change % 1000;
	}
	else if (change > 500){
		temp  = Math.floor(change/500);
		changeType["fiveDollar"] += temp;
		change = change % 500;
	}
	else if (change > 200){
		temp  = Math.floor(change/200);
		changeType["twoDollar"] += temp;
		change = change % 200;
	}
	else if (change > 100){
		temp  = Math.floor(change/100);
		changeType["oneDollar"] += temp;
		change = change % 100;
	}
	else if (change > 25){
		temp  = Math.floor(change/25);
		changeType["quarter"] += temp;
		change = change % 25;
	}
	else if (change > 10){
		temp  = Math.floor(change/10);
		changeType["dime"] += temp;
		change = change % 10;
	}
	else if (change > 5){
		temp  = Math.floor(change/5);
		changeType["nickel"] += temp;
		change = change % 5;
	}
	else {
		temp  = Math.floor(change/1);
		changeType["penny"] += temp;
		change = change % 1;
	}
}
	for (const type in changeType){
		if(changeType[type] === 0 ){
			delete changeType[type];
		}
	}

return changeType;

  
};


/*Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter 
Dime 
Nickel 
Penny */
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));