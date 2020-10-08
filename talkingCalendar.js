let talkingCalendar = function(date) {
  let parsestring =  date.split("/");
  let newformat = "";
  const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const day = {
	1 : 'st, ',
	2 : 'nd, ',
	3 : 'rd, '
};
newformat += months[parsestring[1]-1]+ " ";
if(parsestring[2] > 3){
	newformat += parsestring[2] + "th, ";
}
else{
	newformat += parsestring[2][1] + day[parsestring[2][1]];
}

newformat += parsestring[0];

return newformat;


};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));