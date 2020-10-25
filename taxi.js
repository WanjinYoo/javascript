const blocksAway = function(directions) {
  // Put your solution here
  let east = 0;
  let north = 0;
  let currentdirection = "";
  if(directions[0] === "right" ){
    east += directions[1];
    currentdirection = "east";

  }
  else if(directions[0] === "left"){
    north += directions[1];
    currentdirection = "north";
  }

for(let i = 2; i < directions.length; i+=2){

  if (currentdirection === "north"){
      if(directions[i] === "right"){
        east += directions[i+1];
        currentdirection = "east";
      }
      else if(directions[i] === "left"){
        east -= directions[i+1];
        currentdirection = "west";
      }
  }
  else if(currentdirection === "east"){
    if(directions[i] === "right"){
      north -= directions[i+1];
      currentdirection = "south";

    }
    else if(directions[i] === "left"){
        north += directions[i+1];
        currentdirection = "north";
    }
  }
  else if(currentdirection == "west"){
    if(directions[i] === "right"){
      north += directions[i+1];
      currentdirection = "north";
    }
    else if(directions[i] === "left"){
      north -= directions[i+1];
      currentdirection = "south";
    }
  }
  else if(currentdirection == "south"){
    if(directions[i] === "right"){
      east -= directions[i+1];
      currentdirection = "west";
    }
    else if(directions[i] === "left"){
      east += dirctions[i+1];
      currentdirection = "east";
    }
  }
}
  let result = [
    ["east",east],
    ["north",north]
  ];
  return result;




};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));