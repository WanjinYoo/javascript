const organizeInstructors = function(instructors) {
	const organizedobject = {};
	
	for(let i = 0; i < instructors.length; i++){
		if (organizedobject[instructors[i].course] === undefined){
			organizedobject[instructors[i].course] = [];
			organizedobject[instructors[i].course].push(instructors[i].name);
		}
		else{
			organizedobject[instructors[i].course].push(instructors[i].name);
		}
	}
	return organizedobject;




};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));