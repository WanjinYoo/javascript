const urlEncode = function(text) {
  // Put your solution here
  let space = "%20";
  let str = "";
  for (let i = 0; i < text.length; i++){
  	if(text[i] == " "){
  		str += space;
  	}
  	else{
  		str += text[i];
  	}
  }
  return str;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));