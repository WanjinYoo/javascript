const instructorWithLongestName = function(instructors) {
  let longestNameIndex = 0;
  let longestname = "";
  for(let i = 0; i < instructors.length; i ++){
  	if(instructors[i].name.length > longestname.length){
  	longestname = instructors[i].name;
  	longestNameIndex = i;
  	}
  }
  return instructors[longestNameIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));