const urlDecode = function(text) {
  let url = {};
  let x = 0;
  let temp = 0;
  let tempString = "";
  let space = "%20";
  for(let i = 0; i < text.length; i++){
    if(text[i] === "="){
        url[text.substring(x,i)] = [];
        tempString = text.substring(x,i);
        temp = i +1;
    }
    if(text[i+1] === "&" || i === text.length -1){
      url[tempString] += text.substring(temp,i+1);
      x = i +2;
      temp = i +2;
    }
    if(text.substring(i,i+3) === space){
      url[tempString] += text.substring(temp,i) + " ";
      temp = i + 3;
      i += 3;
    }
  }
  return url;




};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);